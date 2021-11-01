import internal = require("assert");
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
export enum AccessLevel {
    admin = "admin",
    manager = "manager",
    employee = "employee"
}

@Entity()
export class Person {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        type: "enum",
        enum: AccessLevel,
        default: AccessLevel.employee,
        select: false
    })
    access_level: number;

    @Column({
        nullable: true
    })
    phone_number: string;

    @Column({
        select: false
    })
    password_reset_token: string;

    @Column({
        select: false
    })
    password_reset_expire: Date;

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
    deleted: Date;
}
