import { Log } from "../entity/Log";
import { getRepository, Between, LessThan, MoreThan } from "typeorm";


export class LogController {

    static async getLogs(req, res) {
        let before = req.query.before;
        let after = req.query.after;

        if (before != undefined && after != undefined) {
            try {
                const repository = getRepository(Log);
                const logs = await repository.find({
                    where: { created: Between(after, before) }
                });
                return res.status(200).json(logs);
            } catch (error) {
                return res.status(500).json(error);
            };
        } else if (before != undefined) {
            try {
                const repository = getRepository(Log);
                const logs = await repository.find({
                    where : { created: LessThan(before) }
                });
                return res.status(200).json(logs);
            } catch (error) {
                return res.status(500).json(error);
            };
        } else if (after != undefined) {
            try {
                const repository = getRepository(Log);
                const logs = await repository.find({
                    where : { created: MoreThan(after) }
                });
                return res.status(200).json(logs);
            } catch (error) {
                return res.status(500).json(error);
            };
        } else {
            try {
                const repository = getRepository(Log);
                const logs = await repository.find();
                return res.status(200).json(logs);
            } catch (error) {
                return res.status(500).json(error);
            };
        }
    };

    static async getLog(req, res) {
        const { id } = req.params;

        try {
            const repository = getRepository(Log);
            const log = await repository.findByIds(id);
            return res.status(200).json(log);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

}