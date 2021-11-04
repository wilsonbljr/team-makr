import internal = require("assert");
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne} from "typeorm";
import { Person } from "./Person";
import { SoftSkill } from "./SoftSkill";

@Entity()
export class PersonToSoftSkill {

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

    @ManyToOne(() => Person, person => person.personToSoftSkill)
    person!: Person;

    @ManyToOne(() => SoftSkill, softskill => softskill.personToSoftSkill)
    softskill!: SoftSkill;
}