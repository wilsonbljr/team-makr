import internal = require("assert");
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany} from "typeorm";
import { PersonToHardSkill } from "./PersonToHardSkill";
import { PersonToSoftSkill } from "./PersonToSoftSkill";
import { PersonToTeam } from "./PersonToTeam";

@Entity()
export class Person {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column({
        nullable: true
    })
    pronoun?: string;

    @Column({
        select: false,
        default: 0
    })
    admin!: boolean;

    @Column({
        unique: true
    })
    email!: string;

    @Column({
        select: false
    })
    password!: string;

    @Column({
        nullable: true
    })
    phone_number?: string;

    @Column({
        select: false,
        nullable: true
    })
    password_reset_token?: string;

    @Column({
        select: false,
        nullable: true
    })
    password_reset_expire?: Date;

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

    @OneToMany(() => PersonToHardSkill, personToHardSkill => personToHardSkill.person)
    personToHardSkill?: PersonToHardSkill[];

    @OneToMany(() => PersonToSoftSkill, personToSoftSkill => personToSoftSkill.person)
    personToSoftSkill?: PersonToSoftSkill[];

    @OneToMany(() => PersonToTeam, personToTeam => personToTeam.person)
    personToTeam?: PersonToTeam[];
}
