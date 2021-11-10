import { Person } from "../entity/Person"
import { getRepository } from "typeorm";
import { v4 as uuidv4} from "uuid";
const jwt = require('jsonwebtoken');
const logger = require('../config/logger');
const bcrypt = require('bcrypt');
const blacklist = require('../../redis/manage-blacklist')
const emailMiddleWare = require('../config/email')

export class LoginController {

    static async login(req, res) {
        try {
            const token = await LoginController.createToken(req.user)
            res.set('Authorization', token)
            logger.log('info', 'User: ' + req.user.id + ' created a JWT token');
            res.status(204).json({ message: "Login succeded" });
        } catch (error) {
            logger.log('error', 'User: ' + req.user.id + ' failed to login, error: ' + error);
            res.status(500).json(error.message);
        }
    };

    static async logout(req, res) {
        try {
            const token = req.authInfo.token;
            await blacklist.add(token);
            logger.log('info', 'User: ' + req.user.id + ' logged out.');
            res.status(204).send()
        } catch (error) {
            logger.log('error', 'User: ' + req.user.id + ' failed to logout, error: ' + error);
            res.status(500).json(error.message);
        }
    };

    static async resetTokenGenerator(req, res) {
        const { email } = req.body;
        const repository = getRepository(Person);
        try {
            const person = await repository.findOneOrFail({ where: { email: email } })
            if ( person ) {
                try {
                    const resetToken = await uuidv4();
                    const tokenExpireDate = new Date();
                    tokenExpireDate.setMinutes(tokenExpireDate.getMinutes() + 5);
    
                    await repository
                    .createQueryBuilder()
                    .update(Person)
                    .set( { password_reset_token: resetToken, password_reset_expire: tokenExpireDate } )
                    .where ("email = :email", { email: email })
                    .execute();

                    emailMiddleWare(email, resetToken);
    
                    logger.log('info', 'Email: ' + email + ' found in database and reset token generated.');
                    return res.status(200).json({ message: "Email sent with reset token" });
                } catch (error) {
                    logger.log('error', 'Email: ' + email + ' found, can\'t update person, error: ' + error);
                    return res.status(500).json({ message: "Can't update password"});
                };
            };
        } catch (error) {
            logger.log('error', 'Email: ' + email + ' not found, error: ' + error);
            return res.status(400).json({ message: "Email not found"});
        }
        
    }

    static async resetPassword(req, res) {
        const { email, password, password_token } = req.body;
        const repository = getRepository(Person);
        try {
            const person = await repository.createQueryBuilder()
            .select("password_reset_token")
            .addSelect("password_reset_expire")
            .where("email = :email", { email: email})
            .getRawOne();
            console.log(person)
            console.log(password_token)
            console.log(new Date())
            if (password_token == person.password_reset_token && person.password_reset_expire > new Date()) {
                const passwordHash = await bcrypt.hash(password, 12);
                try {
                    await repository
                        .createQueryBuilder()
                        .update(Person)
                        .set( { password: passwordHash, password_reset_token: null, password_reset_expire: null } )
                        .where ("email = :email", { email: email})
                        .execute();
                        logger.log('info', 'Email: ' + email + ' found in database and token is valid, password changed.');
                        return res.status(200).json({ message: "Password changed." });
                } catch (error) {
                    logger.log('error', 'Can\'t update person, error: ' + error);
                    return res.status(500).json({ message: "Internal server error"});
                }
            } else {
                logger.log('error', 'Token invalid or expired');
                return res.status(400).json({ message: "Token invalid or expired"});
            }
        } catch (error) {
            logger.log('error', 'Email: ' + email + ' not found, error: ' + error);
            return res.status(400).json({ message: "Email not found"});
        }
    }

    static async getByEmail(email) {
        try {
            const repository = getRepository(Person);
            const person = await repository.findOne({ select: ["id", "email", "password"],
                where: { email: email }
            });
            logger.log('info', 'Email: ' + email + ' found in database');
            return person;
        } catch (error) {
            logger.log('error', 'Email: ' + email + ' not found, error: ' + error);
            return error;
        }
    };

    static async getById(id) {
        try {
            const repository = getRepository(Person);
            const person = await repository.findOneOrFail({ select: ["id", "email", "password", "admin"],
                where: { id: id }
            });
            logger.log('info', 'User: ' + id + ' found in database');
            return person;
        } catch (error) {
            logger.log('error', 'User: ' + id + ' not found, error: ' + error);
            return error;
        }
    };

    private static createToken(person) {
        try {
            const payload = {
                id: person.id
            };
            const token = jwt.sign(payload, process.env.jwt_key, { expiresIn: '60m' });
            logger.log('info', 'User: ' + person.id + ' created a JWT token');
            return token
        } catch (error) {
            logger.log('error', 'User: ' + person.id + ' failed to create a JWT token, error: ' + error);
            return error
        }

    };
}