import {MigrationInterface, QueryRunner} from "typeorm";

export class teamMakr1635971657518 implements MigrationInterface {
    name = 'teamMakr1635971657518'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`log\`
            ADD \`description\` varchar(255) NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`log\` DROP COLUMN \`description\`
        `);
    }

}
