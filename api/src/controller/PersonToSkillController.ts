import { PersonToSkill } from "../entity/PersonToSkill";
import { getRepository } from "typeorm";
const logger = require('../config/logger');

export class PersonToSkillController {
    
    static async getPersonSkill(req, res) {
        const { id } = req.params;
        try {
            const repository = getRepository(PersonToSkill)
            const skills = await repository.createQueryBuilder("ph")
            .select("h.name", "name")
            .addSelect("ph.level", "level")
            .leftJoin("skill", "h", "ph.skillId = h.id")
            .where("ph.personId = :id", { id: id})
            .getRawMany();
            logger.log('info', 'User: ' + req.user.id + ', Method: getPersonSkill');
            return res.status(200).json(skills);
        } catch (error) {
            logger.log('error', 'Method: getPersonSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    };

    static async addPersonSkill (req, res) {
        const { personId, skillId } = req.params;
        const { level } = req.body;
        try {
            const repository = getRepository(PersonToSkill);
            const personSkill = await repository.findOne({ where: { person: personId, skill: skillId}});
            if ( personSkill ) {
                if (level == personSkill.level) {
                    return res.status(400).json({ message: "Skill already linked to your user" });
                } else {
                    await repository
                    .createQueryBuilder()
                    .update(PersonToSkill)
                    .set( { level: level } )
                    .where ("id = :id", { id: personSkill.id})
                    .execute();
                    const updatedPersonSkill = await repository.findOne({ where: { id: personSkill.id } });
                    logger.log('info', "Method: addPersonSkill, skill level updated for User:" + personId);
                    return res.status(200).json(updatedPersonSkill);
                }
            } else {
                const newPersonSkill = await repository.save({ 
                    level: level, 
                    person: personId,
                    skill: skillId
                });
                logger.log('info', "Method: addPersonSkill, skill: " + skillId + " linked to User:" + personId);
                return res.status(201).json(newPersonSkill);
            };
        } catch (error) {
            logger.log('error', "Method: addPersonSkill, error: " + error);
            return res.status(500).json(error.message);
        };
    }

    static async removePersonSkill (req, res) {
        const { personId, skillId } = req.params;
        try {
            const repository = getRepository(PersonToSkill);
            const personSkill = await repository.findOne({ where: { person: personId, skill: skillId} });
            if ( personSkill ) {
                await repository.delete(personSkill.id);
                logger.log('info', "Method: removePersonSkill, skill:" + skillId + " deleted from User:" + personId);
                return res.status(200).json({ message: "Skill deleted successfully" });
            } else {
                logger.log('info', "Method: removePersonSkill, skill: " + skillId + " not found in user:" + personId);
                return res.status(400).json({ message: "Skill not found in this user" });
            };
        } catch (error) {
            logger.log('error', "Method: removePersonSkill, error: " + error);
            return res.status(500).json(error.message);
        };
    }
}