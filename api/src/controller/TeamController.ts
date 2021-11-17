import { Team } from '../entity/Team';
import { PersonToTeamController } from './PersonToTeamController';
import { getRepository } from 'typeorm';
const logger = require('../config/logger');

export class TeamController {

    static async getTeam(req, res) {
        const { id } = req.params
        try {
            const repository = getRepository(Team);
            const team = await repository.findByIds(id);
            const users = await PersonToTeamController.getTeamPeople(id);
            console.log(team)
            team[0]['users'] = users;
            console.log(team)
            logger.log('info', 'User: ' + req.user.id + ', Method: getTeam');
            return res.status(200).json(team);
        } catch (error) {
            logger.log('error', 'Method: getTeam, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async getTeams(req, res) {
        try {
            const repository = getRepository(Team);
            const teams = await repository.find();
            logger.log('info', 'User: ' + req.user.id + ', Method: getTeams');
            return res.status(200).json(teams);
        } catch (error) {
            logger.log('error', 'Method: getTeams, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async saveTeam(req, res) {
        const newTeam = req.body
        try {
            const repository = getRepository(Team);
            const team = await repository.save(newTeam);
            logger.log('info', 'User: ' + req.user.id + ', Method: saveTeam');
            return res.status(201).json(team);
        } catch (error) {
            logger.log('error', 'Method: saveTeam, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async updateTeam(req, res) {
        const { id } = req.params
        const teamFields = req.body
        try {
            const repository = getRepository(Team);
            await repository.update(id, teamFields);
            const updatedTeam = await repository.findByIds(id);
            logger.log('info', 'User: ' + req.user.id + ', Method: updateTeam');
            return res.status(200).json(updatedTeam);
        } catch (error) {
            logger.log('error', 'Method: saveTeam, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

    static async deleteTeam(req, res) {
        const { id } = req.params;
        try {
            const repository = getRepository(Team);
            await repository.softDelete(id);
            logger.log('info', 'User: ' + req.user.id + ', Method: deleteTeam');
            return res.status(200).json({ message: `id ${id} deleted`});
        } catch (error) {
            logger.log('error', 'Method: deleteTeam, error: ' + error);
            return res.status(500).json(error.message);
        }
    };
}