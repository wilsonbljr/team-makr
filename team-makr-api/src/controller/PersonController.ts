import { Person } from "../entity/Person"
import { getRepository } from "typeorm";
const bcrypt = require('bcrypt');
const logger = require('../config/logger');


export class PersonController {
    
    static async getPeople(req, res) {
        try {
            const repository = getRepository(Person);
            const people = await repository.find({ 
                where: { admin: 0 }
            });
            logger.log('info', 'User: ' + req.user.id + ', Method: getPeople');
            return res.status(200).json(people);
        } catch (error) {
            logger.log('error', 'Method: getPeople, error: ' + error);
            return res.status(500).json(error.message);
        }
    };

    static async getPerson(req, res) {
        const { id } = req.params;
        try {
            const repository = getRepository(Person);
            const person = await repository.findByIds(id);
            logger.log('info', 'User: ' + req.user.id + ', Method: getPerson');
            return res.status(200).json(person);
        } catch (error) {
            logger.log('error', 'Method: getPerson, error: ' + error);
            return res.status(500).json(error.message);
        }
    };

    static async savePerson(req, res) {
        const newPerson = req.body;
        if (newPerson.password != undefined) {
            try {
                newPerson.password = await bcrypt.hash(newPerson.password, 12);
                const repository = getRepository(Person);
                const personSaved = await repository.save(newPerson);
                logger.log('info', 'User: ' + personSaved.id + ', Method: savePerson');
                return res.status(201).json(personSaved);
            } catch (error) {
                logger.log('error', 'Method: savePerson, error: ' + error);
                return res.status(500).json(error.message);
            }
        } else {
            logger.log('error', "Method: savePerson, null password");
            return res.status(400).json({message: "Null password"})
        }
    };

    static async updatePerson(req, res) {
        const { id } = req.params;
        const updateFields = req.body;
        if (updateFields.password != undefined) {
            try {
                updateFields.password = await bcrypt.hash(updateFields.password, 12);
                const repository = getRepository(Person);
                await repository.update(id, updateFields);
                const personUpdated = await repository.findByIds(id);
                logger.log('info', 'User: ' + req.user.id + ', Method: updatePerson');
                return res.status(200).json(personUpdated);
            } catch (error) {
                logger.log('error', 'Method: updatePerson, error: ' + error);
                return res.status(500).json(error.message);
            }
        } else {
            try {
                const repository = getRepository(Person);
                await repository.update(id, updateFields);
                const personUpdated = await repository.findByIds(id);
                logger.log('info', 'User: ' + req.user.id + ', Method: updatePerson');
                return res.status(201).json(personUpdated);
            } catch (error) {
                logger.log('error', 'Method: updatePerson, error: ' + error);
                return res.status(500).json(error.message);
            }
        }
    };

    static async deletePerson(req, res) {
        const { id } = req.params;
        try {
            const repository = getRepository(Person);
            await repository.softDelete(id);
            logger.log('info', 'User: ' + req.user.id + ', Method: deletePerson');
            return res.status(200).json({ message: `id ${id} deleted`});
        } catch (error) {
            logger.log('error', 'Method: deletePerson, error: ' + error);
            return res.status(500).json(error.message);
        }
    };

}