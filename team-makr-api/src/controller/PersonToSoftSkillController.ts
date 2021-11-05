import { PersonToSoftSkill } from "../entity/PersonToSoftSkill";
import { getRepository } from "typeorm";
const logger = require('../config/logger');

export class PersonToSoftSkillController {
    
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

    static async addPersonSoftSkill (req, res) {
        const { personId, softSkillId } = req.params;
        const { level } = req.body;
        try {
            const repository = getRepository(PersonToSoftSkill);
            const personSoftSkill = await repository.findOne({ where: { person: personId, softskill: softSkillId}});
            if ( personSoftSkill ) {
                if (level == personSoftSkill.level) {
                    return res.status(400).json({ message: "Skill already linked to your user" });
                } else {
                    await repository
                    .createQueryBuilder()
                    .update(PersonToSoftSkill)
                    .set( { level: level } )
                    .where ("id = :id", { id: personSoftSkill.id})
                    .execute();
                    const updatedPersonSoftSkill = await repository.findOne({ where: { id: personSoftSkill.id } });
                    logger.log('info', "Method: addPersonSoftSkill, softskill level updated for User:" + personId);
                    return res.status(200).json(updatedPersonSoftSkill);
                }
            } else {
                const newPersonSoftSkill = await repository.save({ 
                    level: level, 
                    person: personId,
                    softskill: softSkillId
                });
                logger.log('info', "Method: addPersonSoftSkill, Softskill: " + softSkillId + " linked to User:" + personId);
                return res.status(201).json(newPersonSoftSkill);
            };
        } catch (error) {
            logger.log('error', "Method: addPersonSoftSkill, error: " + error);
            return res.status(500).json({message: "Internal server error"});
        };
    }

}