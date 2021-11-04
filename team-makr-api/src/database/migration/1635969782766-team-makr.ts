import {MigrationInterface, QueryRunner} from "typeorm";

export class teamMakr1635969782766 implements MigrationInterface {
    name = 'teamMakr1635969782766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\`
            ADD \`pronoun\` varchar(255) NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\` DROP COLUMN \`pronoun\`
        `);
    }

}
