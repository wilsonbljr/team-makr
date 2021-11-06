import internal = require("assert");
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne} from "typeorm";
import { Person } from "./Person";
import { Skill } from "./Skill";

@Entity()
export class PersonToSkill {

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

    @ManyToOne(() => Person, person => person.personToSkill)
    person!: Person;

    @ManyToOne(() => Skill, skill => skill.personToSkill)
    skill!: Skill;
}