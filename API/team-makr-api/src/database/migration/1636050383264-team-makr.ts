import {MigrationInterface, QueryRunner} from "typeorm";

export class teamMakr1636050383264 implements MigrationInterface {
    name = 'teamMakr1636050383264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\` CHANGE \`access_level\` \`admin\` enum ('admin', 'leader', 'member') NOT NULL DEFAULT 'member'
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_team\`
            ADD \`leader\` tinyint NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\` DROP COLUMN \`admin\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\`
            ADD \`admin\` tinyint NOT NULL DEFAULT '0'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\` DROP COLUMN \`admin\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\`
            ADD \`admin\` enum ('admin', 'leader', 'member') NOT NULL DEFAULT 'member'
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_team\` DROP COLUMN \`leader\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\` CHANGE \`admin\` \`access_level\` enum ('admin', 'leader', 'member') NOT NULL DEFAULT 'member'
        `);
    }

}
