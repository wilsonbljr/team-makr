import internal = require("assert");
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany} from "typeorm";
import { PersonToHardSkill } from "./PersonToHardSkill";

@Entity()
export class HardSkill {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id!: number;

    @Column()
    name!: string;

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

    @OneToMany(() => PersonToHardSkill, personToHardSkill => personToHardSkill.hardskill)
    public personToHardSkill?: PersonToHardSkill[];
}
