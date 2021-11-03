import {MigrationInterface, QueryRunner} from "typeorm";

export class teamMakr1635946157353 implements MigrationInterface {
    name = 'teamMakr1635946157353'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            SET sql_mode = ''
        `);
        await queryRunner.query(`
            CREATE TABLE \`soft_skill\` (
                \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted\` datetime(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`person_to_soft_skill\` (
                \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT,
                \`level\` int NOT NULL,
                \`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted\` datetime(6) NULL,
                \`personId\` int UNSIGNED NULL,
                \`softskillId\` int UNSIGNED NULL,
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
                \`access_level\` enum ('admin', 'manager', 'employee') NOT NULL DEFAULT 'employee',
                \`phone_number\` varchar(255) NULL,
                \`password_reset_token\` varchar(255) NOT NULL,
                \`password_reset_expire\` datetime NOT NULL,
                \`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted\` datetime(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`person_to_hard_skill\` (
                \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT,
                \`level\` int NOT NULL,
                \`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted\` datetime(6) NULL,
                \`personId\` int UNSIGNED NULL,
                \`hardskillId\` int UNSIGNED NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`hard_skill\` (
                \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted\` datetime(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`log\` (
                \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT,
                \`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_soft_skill\`
            ADD CONSTRAINT \`FK_546e22fead37ed1ad255bcc1f67\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_soft_skill\`
            ADD CONSTRAINT \`FK_37d0db946a4693c26c2ad25d450\` FOREIGN KEY (\`softskillId\`) REFERENCES \`soft_skill\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_team\`
            ADD CONSTRAINT \`FK_1a4bd2ddf990692f8cfb001f51e\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_team\`
            ADD CONSTRAINT \`FK_1ab4cf1f3e95a998b57ec2db9c5\` FOREIGN KEY (\`teamId\`) REFERENCES \`team\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_hard_skill\`
            ADD CONSTRAINT \`FK_0ba4d3f1e3b5bac5ee118038381\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_hard_skill\`
            ADD CONSTRAINT \`FK_13682dfa4e0906d36a2c4690468\` FOREIGN KEY (\`hardskillId\`) REFERENCES \`hard_skill\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`person_to_hard_skill\` DROP FOREIGN KEY \`FK_13682dfa4e0906d36a2c4690468\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_hard_skill\` DROP FOREIGN KEY \`FK_0ba4d3f1e3b5bac5ee118038381\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_team\` DROP FOREIGN KEY \`FK_1ab4cf1f3e95a998b57ec2db9c5\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_team\` DROP FOREIGN KEY \`FK_1a4bd2ddf990692f8cfb001f51e\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_soft_skill\` DROP FOREIGN KEY \`FK_37d0db946a4693c26c2ad25d450\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`person_to_soft_skill\` DROP FOREIGN KEY \`FK_546e22fead37ed1ad255bcc1f67\`
        `);
        await queryRunner.query(`
            DROP TABLE \`log\`
        `);
        await queryRunner.query(`
            DROP TABLE \`hard_skill\`
        `);
        await queryRunner.query(`
            DROP TABLE \`person_to_hard_skill\`
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
            DROP TABLE \`person_to_soft_skill\`
        `);
        await queryRunner.query(`
            DROP TABLE \`soft_skill\`
        `);
    }

}
