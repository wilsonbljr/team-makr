import { Skill } from '../entity/Skill';
import { getRepository } from 'typeorm';
const logger = require('../config/logger');

export class SkillController {

    static async getSkill(req, res) {
        const { id } = req.params
        try {
            const repository = getRepository(Skill);
            const skill = await repository.findOneOrFail({ where: { id: id } });
            logger.log('info', 'User: ' + req.user.id + ', Method: getSkill');
            return res.status(200).json(skill);
        } catch (error) {
            logger.log('error', 'Method: getSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async getSkills(req, res) {
        try {
            const repository = getRepository(Skill);
            const skills = await repository.find();
            logger.log('info', 'User: ' + req.user.id + ', Method: getSkills');
            return res.status(200).json(skills);
        } catch (error) {
            logger.log('error', 'Method: getSkills, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async saveSkill(req, res) {
        const newSkill = req.body
        try {
            const repository = getRepository(Skill);
            const skill = await repository.save(newSkill);
            logger.log('info', 'User: ' + req.user.id + ', Method: saveSkill');
            return res.status(201).json(skill);
        } catch (error) {
            logger.log('error', 'Method: saveSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async updateSkill(req, res) {
        const { id } = req.params
        const skillFields = req.body
        try {
            const repository = getRepository(Skill);
            await repository.update(id, skillFields);
            const updatedSkill = await repository.findOneOrFail({ where: { id: id } });
            logger.log('info', 'User: ' + req.user.id + ', Method: updateSkill');
            return res.status(200).json(updatedSkill);
        } catch (error) {
            logger.log('error', 'Method: saveSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async deleteSkill(req, res) {
        const { id } = req.params;
        try {
            const repository = getRepository(Skill);
            await repository.delete(id);
            logger.log('info', 'User: ' + req.user.id + ', Method: deleteSkill');
            return res.status(200).json({ message: `id ${id} deleted`});
        } catch (error) {
            logger.log('error', 'Method: deleteSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    };
}