import { Person } from "../entity/Person"
import { getRepository } from "typeorm";
const jwt = require('jsonwebtoken');
const logger = require('../config/logger');


export class LoginController {

    static createToken(person) {
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

    }

    static login(req, res) {
        try {
            const token = LoginController.createToken(req.user)
            res.set('Authorization', token)
            logger.log('info', 'User: ' + req.user.id + ' created a JWT token');
            res.status(204).send();
        } catch (error) {
            logger.log('error', 'User: ' + req.user.id + ' failed to login, error: ' + error);
            res.status(500).send();
        }

    };

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
            const person = await repository.findOne({ select: ["id", "email", "password", "admin"],
                where: { id: id }
            });
            logger.log('info', 'User: ' + id + ' found in database');
            return person;
        } catch (error) {
            logger.log('error', 'User: ' + id + ' not found, error: ' + error);
            return error;
        }
    };

}