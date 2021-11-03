import internal = require("assert");
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne} from "typeorm";
import { HardSkill } from "./HardSkill";
import { Person } from "./Person";

@Entity()
export class PersonToHardSkill {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id!: number;

    @Column()
    level!: number;

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

    @ManyToOne(() => Person, person => person.personToHardSkill)
    person!: Person;

    @ManyToOne(() => HardSkill, hardskill => hardskill.personToHardSkill)
    hardskill!: HardSkill;
}