import internal = require("assert");
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany} from "typeorm";
import { PersonToSkill } from "./PersonToSkill";

@Entity()
export class Skill {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id!: number;

    @Column()
    name!: string;

    @Column()
    soft_skill!: boolean;

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

    @OneToMany(() => PersonToSkill, personToSkill => personToSkill.skill)
    personToSkill?: PersonToSkill[];
}
