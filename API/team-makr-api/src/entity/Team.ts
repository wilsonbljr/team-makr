import internal = require("assert");
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";

@Entity()
export class Team {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id: number;

    @Column()
    name: string;

    @Column("varchar", {length: 1000})
    description: string;

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
