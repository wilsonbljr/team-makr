import { getManager } from "typeorm"
import { Person } from "../entity/Person"

export class PersonController {
    
    static async get() {
        console.log("ola");
    }
    static async save(person: Person) {
        const personSaved = await getManager().save(person);
        return personSaved;
    }
}