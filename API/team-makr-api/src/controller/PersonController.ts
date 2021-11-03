import { getManager } from "typeorm"
import { Person } from "../entity/Person"

export class PersonController {
    
    static async get() {
        // const people = await getManager().find();
        // return people;
    }
    static async save(person: Person) {
        const personSaved = await getManager().save(person);
        return personSaved;
    }
}