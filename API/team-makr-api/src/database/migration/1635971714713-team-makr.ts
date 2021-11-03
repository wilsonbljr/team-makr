import {MigrationInterface, QueryRunner} from "typeorm";

export class teamMakr1635971714713 implements MigrationInterface {
    name = 'teamMakr1635971714713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`log\` DROP COLUMN \`description\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`log\`
            ADD \`description\` varchar(1000) NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`log\` DROP COLUMN \`description\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`log\`
            ADD \`description\` varchar(255) NOT NULL
        `);
    }

}
