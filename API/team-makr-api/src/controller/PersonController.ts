import { getManager } from "typeorm"
import { Person } from "../entity/Person"

export class PersonController {

    async save(person: Person) {
        const personSaved = await getManager().save(person);
        return personSaved;
    }
}