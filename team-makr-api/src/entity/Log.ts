import internal = require("assert");
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class Log {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id!: number;

    @Column("varchar", {length: 16})
    level!: string;

    @Column("varchar", {length: 2048})
    message!: string;

    @Column("varchar", {length: 2048})
    meta!: string;

    @Column("datetime")
    timestamp!: Date;

}
