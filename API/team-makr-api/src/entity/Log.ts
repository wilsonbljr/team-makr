import internal = require("assert");
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";

@Entity()
export class Log {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id!: number;

    @Column("varchar", {length: 1000})
    description!: string;

    @CreateDateColumn({
        select: false
    })
    created!: Date;
}
