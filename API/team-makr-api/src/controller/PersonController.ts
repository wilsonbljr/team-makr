import { Person } from "../entity/Person"
import { getRepository } from "typeorm";
import { PersonToHardSkill } from "../entity/PersonToHardSkill";
import { PersonToSoftSkill } from "../entity/PersonToSoftSkill";
import { PersonToTeam } from "../entity/PersonToTeam";


export class PersonController {
    
    static async getPeople(req, res) {
        try {
            const repository = getRepository(Person);
            const people = await repository.find({ 
                where: { access_level: 'member' }
            });
            return res.status(200).json(people);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static async getPerson(req, res) {
        const { id } = req.params;
        try {
            const repository = getRepository(Person);
            const person = await repository.findByIds(id);
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static async getPersonHardSkill(req, res) {
        const { id } = req.params;
        try {
            const hardSkills = await getRepository(PersonToHardSkill)
            .createQueryBuilder("ph")
            .select("h.name", "name")
            .addSelect("ph.level", "level")
            .leftJoin("hard_skill", "h", "ph.hardskillId = h.id")
            .where("ph.personId = :id", { id: id})
            .getRawMany();
            return res.status(200).json(hardSkills);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

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
            return res.status(200).json(softSkills);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

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
                return res.status(200).json(teams)
                } catch (error) {
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
                return res.status(200).json(teams)
            } catch (error) {
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
                return res.status(200).json(teams)
            } catch (error) {
                return res.status(500).json(error.message);
            }
        }
    }

    static async savePerson(req, res) {
        const newPerson = req.body;
        try {
            const repository = getRepository(Person);
            const personSaved = await repository.save(newPerson);
            return res.status(201).json(personSaved);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static async updatePerson(req, res) {
        const { id } = req.params;
        const updateFields = req.body;
        try {
            const repository = getRepository(Person);
            await repository.update(id, updateFields);
            const personUpdated = await repository.findByIds(id);
            return res.status(201).json(personUpdated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static async deletePerson(req, res) {
        const { id } = req.params;
        const updateFields = req.body;
        try {
            const repository = getRepository(Person);
            await repository.softDelete(id);
            return res.status(201).json({ message: `id ${id} deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
}