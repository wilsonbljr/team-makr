import { Person } from "../entity/Person"
import { getRepository, Like } from "typeorm";
const bcrypt = require('bcrypt');
const logger = require('../config/logger');


export class PersonController {

    static async getPeople(req, res) {
        let { firstName, lastName, skillId } = req.query;
        if (!firstName) {
            firstName = '';
        }
        if (!lastName) {
            lastName = '';
        }
        try {
            const repository = getRepository(Person);
            if (!skillId) {
                const people = await repository.query(`
                SELECT JSON_ARRAYAGG(JSON_OBJECT('id', p.id, 'firstName', p.firstName, 'lastName', p.lastName, 'skills', s.skills))
                FROM person p
                LEFT JOIN ( SELECT personId, JSON_ARRAYAGG(JSON_OBJECT('skillId', skillId, 'level', level)) skills
                            FROM person_to_skill 
                            GROUP BY personId ) s ON s.personId = p.id
                WHERE UPPER(p.firstName) LIKE CONCAT('%',UPPER(?),'%') AND UPPER(p.lastName) LIKE CONCAT('%',UPPER(?),'%')
                `, [firstName, lastName])

                // Sort skills by level
                if (people[0]["JSON_ARRAYAGG(JSON_OBJECT('id', p.id, 'firstName', p.firstName, 'lastName', p.lastName, 'skills', s.skills))"]) {
                    people[0]["JSON_ARRAYAGG(JSON_OBJECT('id', p.id, 'firstName', p.firstName, 'lastName', p.lastName, 'skills', s.skills))"].map((person) => {
                        person.skills ? person.skills.sort((a, b) => b.level - a.level) : person;
                    })
                }

                logger.log('info', 'User: ' + req.user.id + ', Method: getPeople');
                return res.status(200).json(people[0]["JSON_ARRAYAGG(JSON_OBJECT('id', p.id, 'firstName', p.firstName, 'lastName', p.lastName, 'skills', s.skills))"]);
            } else {
                const people = await repository.query(`
                SELECT JSON_ARRAYAGG(JSON_OBJECT('id', p.id, 'firstName', p.firstName, 'lastName', p.lastName, 'skills', s.skills))
                FROM person p
                LEFT JOIN ( SELECT personId, skillId, level, JSON_ARRAYAGG(JSON_OBJECT('skillId', skillId, 'level', level)) skills
                            FROM person_to_skill 
                            GROUP BY personId, skillId, level ) s ON s.personId = p.id
                WHERE s.skillId = ? AND UPPER(p.firstName) LIKE CONCAT('%',UPPER(?),'%') AND UPPER(p.lastName) LIKE CONCAT('%',UPPER(?),'%')
                `, [skillId, firstName, lastName])

                // Sort skills by level
                if (people[0]["JSON_ARRAYAGG(JSON_OBJECT('id', p.id, 'firstName', p.firstName, 'lastName', p.lastName, 'skills', s.skills))"]) {
                    people[0]["JSON_ARRAYAGG(JSON_OBJECT('id', p.id, 'firstName', p.firstName, 'lastName', p.lastName, 'skills', s.skills))"].map((person) => {
                        person.skills ? person.skills.sort((a, b) => b.level - a.level) : person;
                    })
                }

                logger.log('info', 'User: ' + req.user.id + ', Method: getPeople');
                return res.status(200).json(people[0]["JSON_ARRAYAGG(JSON_OBJECT('id', p.id, 'firstName', p.firstName, 'lastName', p.lastName, 'skills', s.skills))"]);
            }
        } catch (error) {
            logger.log('error', 'Method: getPeople, error: ' + error);
            return res.status(500).json(error.message);
        }
    };

    static async getPerson(req, res) {
        const { id } = req.params;
        try {
            const repository = getRepository(Person);
            const person = await repository.findByIds(id, {
                select:
                    ['id', 'firstName', 'lastName', 'pronoun', 'admin', 'email', 'phone_number']
            });
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
            return res.status(400).json({ message: "Null password" })
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
                return res.status(200).json(personUpdated);
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
            return res.status(200).json({ message: `id ${id} deleted` });
        } catch (error) {
            logger.log('error', 'Method: deletePerson, error: ' + error);
            return res.status(500).json(error.message);
        }
    };

}