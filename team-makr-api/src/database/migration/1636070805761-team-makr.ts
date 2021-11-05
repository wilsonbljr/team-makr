import {MigrationInterface, QueryRunner} from "typeorm";

export class teamMakr1636070805761 implements MigrationInterface {
    name = 'teamMakr1636070805761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`log\` (
                \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT,
                \`level\` varchar(16) NOT NULL,
                \`message\` varchar(2048) NOT NULL,
                \`meta\` varchar(2048) NOT NULL,
                \`timestamp\` datetime NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE \`log\`
        `);
    }

}
