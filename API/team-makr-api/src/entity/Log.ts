import internal = require("assert");
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class Log {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id!: number;

    @Column("varchar", {length: 1000})
    description!: string;

    @CreateDateColumn()
    created!: Date;
}
