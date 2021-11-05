import { PersonToHardSkill } from "../entity/PersonToHardSkill";
import { getRepository } from "typeorm";
const logger = require('../config/logger');

export class PersonToHardSkillController {
    
    static async getPersonHardSkill(req, res) {
        const { id } = req.params;
        try {
            const repository = getRepository(PersonToHardSkill)
            const hardSkills = await repository.createQueryBuilder("ph")
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

    static async addPersonHardSkill (req, res) {
        const { personId, hardSkillId } = req.params;
        const { level } = req.body;
        try {
            const repository = getRepository(PersonToHardSkill);
            const personHardSkill = await repository.findOne({ where: { person: personId, hardskill: hardSkillId}});
            if ( personHardSkill ) {
                if (level == personHardSkill.level) {
                    return res.status(400).json({ message: "Skill already linked to your user" });
                } else {
                    await repository
                    .createQueryBuilder()
                    .update(PersonToHardSkill)
                    .set( { level: level } )
                    .where ("id = :id", { id: personHardSkill.id})
                    .execute();
                    const updatedPersonHardSkill = await repository.findOne({ where: { id: personHardSkill.id } });
                    logger.log('info', "Method: addPersonHardSkill, hardskill level updated for User:" + personId);
                    return res.status(200).json(updatedPersonHardSkill);
                }
            } else {
                const newPersonHardSkill = await repository.save({ 
                    level: level, 
                    person: personId,
                    hardskill: hardSkillId
                });
                logger.log('info', "Method: addPersonHardSkill, hardskill: " + hardSkillId + " linked to User:" + personId);
                return res.status(201).json(newPersonHardSkill);
            };
        } catch (error) {
            logger.log('error', "Method: addPersonHardSkill, error: " + error);
            return res.status(500).json({message: "Internal server error"});
        };
    }

}