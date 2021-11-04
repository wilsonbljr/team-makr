import {MigrationInterface, QueryRunner} from "typeorm";

export class teamMakr1635962607523 implements MigrationInterface {
    name = 'teamMakr1635962607523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\` CHANGE \`password_reset_token\` \`password_reset_token\` varchar(255) NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\` CHANGE \`password_reset_expire\` \`password_reset_expire\` datetime NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\` CHANGE \`password_reset_expire\` \`password_reset_expire\` datetime NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`person\` CHANGE \`password_reset_token\` \`password_reset_token\` varchar(255) NOT NULL
        `);
    }

}
