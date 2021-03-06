import { Log } from "../entity/Log";
import { getRepository, Between, LessThan, MoreThan } from "typeorm";
const logger = require('../config/logger');


export class LogController {

    static async getLogs(req, res) {
        let before = req.query.before;
        let after = req.query.after;

        if (req.user.admin == false) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        
        if (before != undefined && after != undefined) {
            try {
                const repository = getRepository(Log);
                const logs = await repository.find({
                    where: { timestamp: Between(after, before) }
                });
                logger.log('info', 'User: ' + req.user.id + ', Method: getLogs, before & after: undefined');
                return res.status(200).json(logs);
            } catch (error) {
                logger.log('error', 'Method: getLogs, before & after: defined, error: ' + error);
                return res.status(500).json(error.message);
            };
        } else if (before != undefined) {
            try {
                const repository = getRepository(Log);
                const logs = await repository.find({
                    where : { timestamp: LessThan(before) }
                });
                logger.log('info', 'User: ' + req.user.id + ', Method: getLogs, after: undefined');
                return res.status(200).json(logs);
            } catch (error) {
                logger.log('error', 'Method: getLogs, after: defined, error: ' + error);
                return res.status(500).json(error.message);
            };
        } else if (after != undefined) {
            try {
                const repository = getRepository(Log);
                const logs = await repository.find({
                    where : { timestamp: MoreThan(after) }
                });
                logger.log('info', 'User: ' + req.user.id + ', Method: getLogs, before: undefined');
                return res.status(200).json(logs);
            } catch (error) {
                logger.log('error', 'Method: getLogs, before: defined, error: ' + error);
                return res.status(500).json(error.message);
            };
        } else {
            try {
                const repository = getRepository(Log);
                const logs = await repository.find();
                logger.log('info', 'User: ' + req.user.id + ', Method: getLogs');
                return res.status(200).json(logs);
            } catch (error) {
                logger.log('error', 'Method: getLogs, error: ' + error);
                return res.status(500).json(error.message);
            };
        }
    };

    static async getLog(req, res) {
        const { id } = req.params;

        if (req.user.admin == false) {
            return res.status(401).json({ message: "Unauthorized" })
        }

        try {
            const repository = getRepository(Log);
            const log = await repository.findByIds(id);
            logger.log('info', 'User: ' + req.user.id + ', Method: getLog');
            return res.status(200).json(log);
        } catch (error) {
            logger.log('error', 'Method: getLog, error: ' + error);
            return res.status(500).json(error.message);
        }
    }

}