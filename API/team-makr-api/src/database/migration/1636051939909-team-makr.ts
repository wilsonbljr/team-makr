import {MigrationInterface, QueryRunner} from "typeorm";

export class teamMakr1636051939909 implements MigrationInterface {
    name = 'teamMakr1636051939909'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\`
            ADD UNIQUE INDEX \`IDX_d2d717efd90709ebd3cb26b936\` (\`email\`)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person\` DROP INDEX \`IDX_d2d717efd90709ebd3cb26b936\`
        `);
    }

}
