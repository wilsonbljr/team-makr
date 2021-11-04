import internal = require("assert");
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne} from "typeorm";
import { Person } from "./Person";
import { Team } from "./Team";

@Entity()
export class PersonToTeam {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id!: number;

    @Column()
    user_active!: boolean;

    @Column()
    leader!: boolean;

    @CreateDateColumn({
        select: false
    })
    created: Date;

    @UpdateDateColumn({
        select: false
    })
    updated: Date;

    @DeleteDateColumn({
        select: false
    })
    deleted?: Date;

    @ManyToOne(() => Person, person => person.personToTeam)
    person!: Person;

    @ManyToOne(() => Team, team => team.personToTeam)
    team!: Team;
}