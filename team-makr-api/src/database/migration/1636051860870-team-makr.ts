import {MigrationInterface, QueryRunner} from "typeorm";

export class teamMakr1636051860870 implements MigrationInterface {
    name = 'teamMakr1636051860870'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\`
            ADD \`email\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\`
            ADD \`password\` varchar(255) NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\` DROP COLUMN \`password\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\` DROP COLUMN \`email\`
        `);
    }

}
