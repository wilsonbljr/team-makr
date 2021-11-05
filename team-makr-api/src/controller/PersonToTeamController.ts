import { PersonToTeam } from "../entity/PersonToTeam";
import { CannotAttachTreeChildrenEntityError, getRepository } from "typeorm";
const logger = require('../config/logger');

export class PersonToTeamController {
    
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

    static async addPersonTeam (req, res) {
        const { personId, teamId } = req.params;
        const { user_active, leader } = req.body;
        try {
            const repository = getRepository(PersonToTeam);
            const personTeam = await repository.findOne({ where: { person: personId, team: teamId }});
            if ( personTeam ) {
                if (user_active != personTeam.user_active || personTeam.leader != leader) {
                    try {                    
                        await repository
                        .createQueryBuilder()
                        .update(PersonToTeam)
                        .set( { user_active: user_active, leader: leader } )
                        .where ("id = :id", { id: personTeam.id})
                        .execute();
                        const updatedPersonTeam = await repository.findOne({ where: { person: personId, team: teamId }});
                        logger.log('info', "Method: addPersonTeam, Team level or leadership updated for User:" + personId);
                        return res.status(200).json(updatedPersonTeam);
                    } catch (error) {
                        logger.log('error', "Method: addPersonTeam, can't update table PersonToTeam, error:" + error);
                        return res.status(500).json({ message: "Internal server error" });
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
                }  catch (error) {
                    logger.log('error', "Method: addPersonTeam, error: " + error);
                    return res.status(500).json({message: "Internal server error"});
                }
            }
        } catch (error) {
            logger.log('error', "Method: addPersonTeam, error: " + error);
            return res.status(500).json({message: "Internal server error"});            
        }
    };
}