import {MigrationInterface, QueryRunner} from "typeorm";

export class teamMakr1635736053732 implements MigrationInterface {
    name = 'teamMakr1635736053732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\` DROP COLUMN \`age\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\`
            ADD \`cpf\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\`
            ADD \`access_level\` int NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\`
            ADD \`password_reset_token\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\`
            ADD \`phone_number\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\`
            ADD \`isActive\` tinyint NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\` DROP COLUMN \`isActive\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\` DROP COLUMN \`phone_number\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\` DROP COLUMN \`password_reset_token\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\` DROP COLUMN \`access_level\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\` DROP COLUMN \`cpf\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\`
            ADD \`age\` int NOT NULL
        `);
    }

}
