import {MigrationInterface, QueryRunner} from "typeorm";

export class teamMakr1636152939052 implements MigrationInterface {
    name = 'teamMakr1636152939052'

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
        await queryRunner.query(`
            CREATE TABLE \`skill\` (
                \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`soft_skill\` tinyint NOT NULL,
                \`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted\` datetime(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`person_to_skill\` (
                \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT,
                \`level\` int NOT NULL,
                \`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted\` datetime(6) NULL,
                \`personId\` int UNSIGNED NULL,
                \`skillId\` int UNSIGNED NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`team\` (
                \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`description\` varchar(1000) NOT NULL,
                \`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted\` datetime(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`person_to_team\` (
                \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT,
                \`user_active\` tinyint NOT NULL,
                \`leader\` tinyint NOT NULL,
                \`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted\` datetime(6) NULL,
                \`personId\` int UNSIGNED NULL,
                \`teamId\` int UNSIGNED NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`person\` (
                \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT,
                \`firstName\` varchar(255) NOT NULL,
                \`lastName\` varchar(255) NOT NULL,
                \`pronoun\` varchar(255) NULL,
                \`admin\` tinyint NOT NULL DEFAULT '0',
                \`email\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`phone_number\` varchar(255) NULL,
                \`password_reset_token\` varchar(255) NULL,
                \`password_reset_expire\` datetime NULL,
                \`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted\` datetime(6) NULL,
                UNIQUE INDEX \`IDX_d2d717efd90709ebd3cb26b936\` (\`email\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_skill\`
            ADD CONSTRAINT \`FK_3c64ef2747c06a715871d2af5d8\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_skill\`
            ADD CONSTRAINT \`FK_c78559b5a4526b58c8314e26b1d\` FOREIGN KEY (\`skillId\`) REFERENCES \`skill\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_team\`
            ADD CONSTRAINT \`FK_1a4bd2ddf990692f8cfb001f51e\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_team\`
            ADD CONSTRAINT \`FK_1ab4cf1f3e95a998b57ec2db9c5\` FOREIGN KEY (\`teamId\`) REFERENCES \`team\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person_to_team\` DROP FOREIGN KEY \`FK_1ab4cf1f3e95a998b57ec2db9c5\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_team\` DROP FOREIGN KEY \`FK_1a4bd2ddf990692f8cfb001f51e\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_skill\` DROP FOREIGN KEY \`FK_c78559b5a4526b58c8314e26b1d\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_skill\` DROP FOREIGN KEY \`FK_3c64ef2747c06a715871d2af5d8\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_d2d717efd90709ebd3cb26b936\` ON \`person\`
        `);
        await queryRunner.query(`
            DROP TABLE \`person\`
        `);
        await queryRunner.query(`
            DROP TABLE \`person_to_team\`
        `);
        await queryRunner.query(`
            DROP TABLE \`team\`
        `);
        await queryRunner.query(`
            DROP TABLE \`person_to_skill\`
        `);
        await queryRunner.query(`
            DROP TABLE \`skill\`
        `);
        await queryRunner.query(`
            DROP TABLE \`log\`
        `);
    }

}
