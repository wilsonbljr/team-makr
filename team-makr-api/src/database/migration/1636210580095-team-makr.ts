import {MigrationInterface, QueryRunner} from "typeorm";

export class teamMakr1636210580095 implements MigrationInterface {
    name = 'teamMakr1636210580095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person_to_skill\` DROP COLUMN \`deleted\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_team\` DROP COLUMN \`deleted\`
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person_to_team\`
            ADD \`deleted\` datetime(6) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_skill\`
            ADD \`deleted\` datetime(6) NULL
        `);
    }
}
