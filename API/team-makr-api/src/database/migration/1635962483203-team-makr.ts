import {MigrationInterface, QueryRunner} from "typeorm";

export class teamMakr1635962483203 implements MigrationInterface {
    name = 'teamMakr1635962483203'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\` CHANGE \`access_level\` \`access_level\` enum ('admin', 'leader', 'member') NOT NULL DEFAULT 'member'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\` CHANGE \`access_level\` \`access_level\` enum ('admin', 'manager', 'employee') NOT NULL DEFAULT 'employee'
        `);
    }

}
