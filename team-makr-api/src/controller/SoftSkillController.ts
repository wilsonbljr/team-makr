import { SoftSkill } from '../entity/SoftSkill';
import { getRepository } from 'typeorm';
const logger = require('../config/logger');

export class SoftSkillController {

    static async getSoftSkill(req, res) {
        const { id } = req.params
        try {
            const repository = getRepository(SoftSkill);
            const softSkill = await repository.findByIds(id);
            logger.log('info', 'User: ' + req.user.id + ', Method: getSoftSkill');
            return res.status(200).json(softSkill);
        } catch (error) {
            logger.log('error', 'Method: getSoftSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async getSoftSkills(req, res) {
        try {
            const repository = getRepository(SoftSkill);
            const softSkills = await repository.find();
            logger.log('info', 'User: ' + req.user.id + ', Method: getSoftSkills');
            return res.status(200).json(softSkills);
        } catch (error) {
            logger.log('error', 'Method: getSoftSkills, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async saveSoftSkill(req, res) {
        const newSoftSkill = req.body
        try {
            const repository = getRepository(SoftSkill);
            const softSkill = await repository.save(newSoftSkill);
            logger.log('info', 'User: ' + req.user.id + ', Method: saveSoftSkill');
            return res.status(201).json(softSkill);
        } catch (error) {
            logger.log('error', 'Method: saveSoftSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async updateSoftSkill(req, res) {
        const { id } = req.params
        const softSkillFields = req.body
        try {
            const repository = getRepository(SoftSkill);
            await repository.update(id, softSkillFields);
            const updatedSoftSkill = await repository.findByIds(id);
            logger.log('info', 'User: ' + req.user.id + ', Method: updateSoftSkill');
            return res.status(200).json(updatedSoftSkill);
        } catch (error) {
            logger.log('error', 'Method: saveSoftSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async deleteSoftSkill(req, res) {
        const { id } = req.params;
        try {
            const repository = getRepository(SoftSkill);
            await repository.softDelete(id);
            logger.log('info', 'User: ' + req.user.id + ', Method: deleteSoftSkill');
            return res.status(200).json({ message: `id ${id} deleted`});
        } catch (error) {
            logger.log('error', 'Method: deleteSoftSkill, error: ' + error);
            return res.status(500).json(error.message);
        }
    };
}