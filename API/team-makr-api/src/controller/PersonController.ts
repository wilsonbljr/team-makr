import { Person } from "../entity/Person"
import { getRepository } from "typeorm";


export class PersonController {
    
    static async getPeople(req, res) {
        try {
            const repository = getRepository(Person);
            const people = await repository.find();
            return res.status(200).json(people);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static async getPerson(req, res) {
        const { id } = req.params;
        try {
            const repository = getRepository(Person);
            const people = await repository.findByIds(id);
            return res.status(200).json(people);
        } catch (error) {
            return res.status(500).json(error.message);
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
    }

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
    }

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
    }
}