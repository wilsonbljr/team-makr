import { HardSkill } from '../entity/HardSkill';
import { getRepository } from 'typeorm';
const logger = require('../config/logger');

export class HardSkillController {

    static async getHardSkill(req, res) {
        const { id } = req.params
        try {
            const repository = getRepository(HardSkill);
            const hardSkill = await repository.findByIds(id);
            logger.log('info', 'User: ' + req.user.id + ', Method: getHardSkill');
            return res.status(200).json(hardSkill);
        } catch (error) {
            logger.log('error', 'Method: getHardSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async getHardSkills(req, res) {
        try {
            const repository = getRepository(HardSkill);
            const hardSkills = await repository.find();
            logger.log('info', 'User: ' + req.user.id + ', Method: getHardSkills');
            return res.status(200).json(hardSkills);
        } catch (error) {
            logger.log('error', 'Method: getHardSkills, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async saveHardSkill(req, res) {
        const newHardSkill = req.body
        try {
            const repository = getRepository(HardSkill);
            const hardSkill = await repository.save(newHardSkill);
            logger.log('info', 'User: ' + req.user.id + ', Method: saveHardSkill');
            return res.status(201).json(hardSkill);
        } catch (error) {
            logger.log('error', 'Method: saveHardSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async updateHardSkill(req, res) {
        const { id } = req.params
        const hardSkillFields = req.body
        try {
            const repository = getRepository(HardSkill);
            await repository.update(id, hardSkillFields);
            const updatedHardSkill = await repository.findByIds(id);
            logger.log('info', 'User: ' + req.user.id + ', Method: updateHardSkill');
            return res.status(200).json(updatedHardSkill);
        } catch (error) {
            logger.log('error', 'Method: saveHardSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async deleteHardSkill(req, res) {
        const { id } = req.params;
        try {
            const repository = getRepository(HardSkill);
            await repository.softDelete(id);
            logger.log('info', 'User: ' + req.user.id + ', Method: deleteHardSkill');
            return res.status(200).json({ message: `id ${id} deleted`});
        } catch (error) {
            logger.log('error', 'Method: deleteHardSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    };
}