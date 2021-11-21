import { PersonToTeam } from "../entity/PersonToTeam";
import { getRepository } from "typeorm";
const logger = require('../config/logger');

export class PersonToTeamController {

    static async getPersonTeam(req, res) {
        const { id } = req.params;
        let active = req.query.active;

        if (active == "true") {
            try {
                const teams = await getRepository(PersonToTeam).query(`
                    SELECT t.id as id, t.name AS name, t.description AS description, pt.user_active as user_active, pt.leader as leader
                    FROM person_to_team pt LEFT JOIN team t ON  pt.teamId = t.id 
                    WHERE ( pt.personId = ? AND pt.user_active = 1 AND t.deleted IS NULL ) 
                `, [id]);

                logger.log('info', 'User: ' + req.user.id + ', Method: getPersonTeam, Active = true');
                return res.status(200).json(teams)
            } catch (error) {
                logger.log('error', 'Method: getPersonTeam, active = true, error: ' + error);
                return res.status(500).json(error.message);
            }
        } else if (active == "false") {
            try {
                const teams = await getRepository(PersonToTeam).query(`
                    SELECT t.id as id, t.name AS name, t.description AS description, pt.user_active as user_active, pt.leader as leader
                    FROM person_to_team pt LEFT JOIN team t ON  pt.teamId = t.id 
                    WHERE ( pt.personId = ? AND pt.user_active = 0 AND t.deleted IS NULL ) 
                `, [id]);
                logger.log('info', 'User: ' + req.user.id + ', Method: getPersonTeam, Active = false');
                return res.status(200).json(teams)
            } catch (error) {
                logger.log('error', 'Method: getPersonTeam, active = false, error: ' + error);
                return res.status(500).json(error.message);
            }
        } else {
            try {
                const teams = await getRepository(PersonToTeam).query(`
                    SELECT t.id as id, t.name AS name, t.description AS description, pt.user_active as user_active, pt.leader as leader
                    FROM person_to_team pt LEFT JOIN team t ON  pt.teamId = t.id 
                    WHERE ( pt.personId = ? AND t.deleted IS NULL ) 
                `, [id]);
                logger.log('info', 'User: ' + req.user.id + ', Method: getPersonTeam, Active = null');
                return res.status(200).json(teams)
            } catch (error) {
                logger.log('error', 'Method: getPersonTeam, active = null, error: ' + error);
                return res.status(500).json(error.message);
            }
        }
    }

    static async addPersonTeam(req, res) {
        const { personId, teamId } = req.params;
        const { user_active, leader } = req.body;
        try {
            const repository = getRepository(PersonToTeam);
            const personTeam = await repository.findOne({ where: { person: personId, team: teamId } });
            if (personTeam) {
                if (user_active != personTeam.user_active || personTeam.leader != leader) {
                    try {
                        await repository
                            .createQueryBuilder()
                            .update(PersonToTeam)
                            .set({ user_active: user_active, leader: leader })
                            .where("id = :id", { id: personTeam.id })
                            .execute();
                        const updatedPersonTeam = await repository.findOne({ where: { person: personId, team: teamId } });
                        logger.log('info', "Method: addPersonTeam, Team level or leadership updated for User:" + personId);
                        return res.status(200).json(updatedPersonTeam);
                    } catch (error) {
                        logger.log('error', "Method: addPersonTeam, can't update table PersonToTeam, error:" + error);
                        return res.status(500).json(error.message);
                    }
                } else {
                    logger.log('error', "Method: addPersonTeam, no changes needed.");
                    return res.status(400).json({ message: "Team already linked to your user" });
                }
            } else {
                try {
                    const newPersonTeam = await repository.save({
                        user_active: user_active,
                        person: personId,
                        team: teamId,
                        leader: leader
                    });
                    logger.log('info', "Method: addPersonTeam, Team: " + teamId + " linked to User:" + personId);
                    return res.status(201).json(newPersonTeam);
                } catch (error) {
                    logger.log('error', "Method: addPersonTeam, error: " + error);
                    return res.status(500).json(error.message);
                }
            }
        } catch (error) {
            logger.log('error', "Method: addPersonTeam, error: " + error);
            return res.status(500).json(error.message);
        }
    };

    static async removePersonTeam(req, res) {
        const { personId, teamId } = req.params;
        try {
            const repository = getRepository(PersonToTeam);
            const personTeam = await repository.findOne({ where: { person: personId, team: teamId } });
            if (personTeam) {
                if (personTeam.user_active == true) {
                    try {
                        await repository
                            .createQueryBuilder()
                            .update(PersonToTeam)
                            .set({ user_active: false })
                            .where("id = :id", { id: personTeam.id })
                            .execute();
                        logger.log('info', "Method: removePersonTeam, user:" + personId + " deactivated from team");
                        return res.status(200).json({ message: "User removed from team" });
                    } catch (error) {
                        logger.log('error', "Method: removePersonTeam, can't update table PersonToTeam, error:" + error);
                        return res.status(500).json(error.message);
                    }
                } else {
                    logger.log('error', "Method: removePersonTeam, user already deactivated.");
                    return res.status(400).json({ message: "User already removed from team" });
                }
            } else {
                logger.log('error', "Method: removePersonTeam, user not found in team");
                return res.status(400).json({ message: "User not found in team" });
            }
        } catch (error) {
            logger.log('error', "Method: addPersonTeam, error: " + error);
            return res.status(500).json(error.message);
        }
    };

    static async getTeamPeople(teamId) {
        try {
            const repository = getRepository(PersonToTeam);
            const teamPeople = await repository.createQueryBuilder('pt')
                .select('p.id', 'id')
                .addSelect('p.firstName', 'firstName')
                .addSelect('p.lastName', 'lastName')
                .addSelect('pt.leader', 'leader')
                .addSelect('pt.user_active', 'user_active')
                .leftJoin('person', 'p', 'pt.personId = p.id')
                .where('pt.teamId = :id', { id: teamId })
                .getRawMany();
            return teamPeople;
        } catch (error) {
            logger.log('error', "Method: getTeamPeople, error: " + error);
            return error.message;
        }
    }
}