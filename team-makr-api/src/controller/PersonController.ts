import { Person } from "../entity/Person"
import { getRepository } from "typeorm";
import { PersonToHardSkill } from "../entity/PersonToHardSkill";
import { PersonToSoftSkill } from "../entity/PersonToSoftSkill";
import { PersonToTeam } from "../entity/PersonToTeam";
const bcrypt = require('bcrypt');
const logger = require('../config/logger');


export class PersonController {
    
    static async getPeople(req, res) {
        console.log(req.authInfo.token);
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

    static async getPersonHardSkill(req, res) {
        const { id } = req.params;
        try {
            const hardSkills = await getRepository(PersonToHardSkill)
            .createQueryBuilder("ph")
            .select("h.name", "name")
            .addSelect("ph.level", "level")
            .leftJoin("hard_skill", "h", "ph.hardskillId = h.id")
            .where("ph.personId = :id", { id: id})
            .getRawMany();
            logger.log('info', 'User: ' + req.user.id + ', Method: getPersonHardSkill');
            return res.status(200).json(hardSkills);
        } catch (error) {
            logger.log('error', 'Method: getPersonHardSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    };

    static async getPersonSoftSkill(req, res) {
        const { id } = req.params;
        try {
            const softSkills = await getRepository(PersonToSoftSkill)
            .createQueryBuilder("ps")
            .select("s.name", "name")
            .addSelect("ps.level", "level")
            .leftJoin("soft_skill", "s", "ps.softskillId = s.id")
            .where("ps.personId = :id", { id: id })
            .getRawMany();
            logger.log('info', 'User: ' + req.user.id + ', Method: getPersonSoftSkill');
            return res.status(200).json(softSkills);
        } catch (error) {
            logger.log('error', 'Method: getPersonSoftSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    };

    static async getPersonTeam(req, res) {
        const { id } = req.params.id;
        let active = req.query.active;

        if (active == "true") {
            try {
                const teams = await getRepository(PersonToTeam).query(`
                    SELECT t.name AS t_name, t.description AS t_description 
                    FROM person_to_team pt LEFT JOIN team t ON  pt.teamId = t.id 
                    AND t.deleted IS NULL WHERE ( pt.personId = 1 AND pt.user_active != 0 ) 
                    AND ( pt.deleted IS NULL )
                `);
                logger.log('info', 'User: ' + req.user.id + ', Method: getPersonTeam, Active = true');
                return res.status(200).json(teams)
                } catch (error) {
                    logger.log('error', 'Method: getPersonTeam, active = true, error: ' + error);
                    return res.status(500).json(error.message);
            }
        } else if (active == "false") {
            try {
                const teams = await getRepository(PersonToTeam).query(`
                    SELECT t.name AS t_name, t.description AS t_description 
                    FROM person_to_team pt LEFT JOIN team t ON  pt.teamId = t.id 
                    AND t.deleted IS NULL WHERE ( pt.personId = 1 AND pt.user_active = 0 ) 
                    AND ( pt.deleted IS NULL )
                `);
                logger.log('info', 'User: ' + req.user.id + ', Method: getPersonTeam, Active = false');
                return res.status(200).json(teams)
            } catch (error) {
                logger.log('error', 'Method: getPersonTeam, active = false, error: ' + error);
                return res.status(500).json(error.message);
        }
        } else {
            try {
                const teams = await getRepository(PersonToTeam).query(`
                    SELECT t.name AS t_name, t.description AS t_description 
                    FROM person_to_team pt LEFT JOIN team t ON  pt.teamId = t.id 
                    AND t.deleted IS NULL WHERE ( pt.personId = 1 ) 
                    AND ( pt.deleted IS NULL )
                `);
                logger.log('info', 'User: ' + req.user.id + ', Method: getPersonTeam, Active = null');
                return res.status(200).json(teams)
            } catch (error) {
                logger.log('error', 'Method: getPersonTeam, active = null, error: ' + error);
                return res.status(500).json(error.message);
            }
        }
    }

    static async savePerson(req, res) {
        const newPerson = req.body;
        if (newPerson.password != undefined) {
            try {
                newPerson.password = await bcrypt.hash(newPerson.password, 12);
                const repository = getRepository(Person);
                const personSaved = await repository.save(newPerson);
                logger.log('info', 'User: ' + req.user.id + ', Method: savePerson');
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
            return res.status(200).json({ message: `id ${id} deletado`});
        } catch (error) {
            logger.log('error', 'Method: deletePerson, error: ' + error);
            return res.status(500).json(error.message);
        }
    };

}