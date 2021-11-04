import { Person } from "../entity/Person"
import { getRepository } from "typeorm";
const jwt = require('jsonwebtoken');


export class LoginController {

    static createToken(person) {
        const payload = {
            id: person.id
        };
        const token = jwt.sign(payload, process.env.jwt_key, { expiresIn: '60m' });
        return token
    }

    static login(req, res) {
        const token = LoginController.createToken(req.user)
        res.set('Authorization', token)
        res.status(204).send();
    };

    static logout(req, res) {
        console.log(req);
        res.status(201);
    };


    static async getByEmail(email) {
        try {
            const repository = getRepository(Person);
            const person = await repository.findOne({ select: ["id", "email", "password"],
                where: { email: email }
            });
            return person;
        } catch (error) {
            return error;
        }
    };

    static async getById(id) {
        try {
            const repository = getRepository(Person);
            const person = await repository.findOne({ select: ["id", "email", "password", "admin"],
                where: { id: id }
            });
            return person;
        } catch (error) {
            return error;
        }
    };

}