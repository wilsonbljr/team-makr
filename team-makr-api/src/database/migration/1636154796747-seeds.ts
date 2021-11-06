import {MigrationInterface, QueryRunner} from "typeorm";

export class seeds1636154796747 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO person VALUES (1,'Sana','Minatozaki','She/Her',0,'sana@gmail.com','$2b$12$HCYYi5SqtsAlyd1FuzsaQelQDmfJYrhyStJNdI0j7ATNmNmLmdz7.','41933654321',NULL,NULL,'2021-11-05 23:38:54.052721','2021-11-05 23:38:54.052721',NULL),
            (2,'Wilson', 'Bley', 'He/Him',0,'wilson@gmail.com','$2b$12$HCYYi5SqtsAlyd1FuzsaQelQDmfJYrhyStJNdI0j7ATNmNmLmdz7.','41933654321',NULL,NULL,'2021-11-05 23:38:54.052721','2021-11-05 23:38:54.052721',NULL),
            (3,'Stephanie', 'Dyer', 'She/Her',0,'stephanie@gmail.com','$2b$12$HCYYi5SqtsAlyd1FuzsaQelQDmfJYrhyStJNdI0j7ATNmNmLmdz7.','41933654321',NULL,NULL,'2021-11-05 23:38:54.052721','2021-11-05 23:38:54.052721',NULL),
            (4,'Wanda', 'Russell','They/Them',0,'wanda@gmail.com','$2b$12$HCYYi5SqtsAlyd1FuzsaQelQDmfJYrhyStJNdI0j7ATNmNmLmdz7.','41933654321',NULL,NULL,'2021-11-05 23:38:54.052721','2021-11-05 23:38:54.052721',NULL),
            (5,'Blake', 'Wilkins','He/Him',0,'blake@gmail.com','$2b$12$HCYYi5SqtsAlyd1FuzsaQelQDmfJYrhyStJNdI0j7ATNmNmLmdz7.','41933654321',NULL,NULL,'2021-11-05 23:38:54.052721','2021-11-05 23:38:54.052721',NULL);
        `);
        await queryRunner.query(`
            INSERT INTO team (name, description) VALUES ('Agile Applet', 'SCRUMMMMMMMM'), ('Abstract Connoisseurs', 'OOP rules'), ('Hypertext Assassins', 'HTML?'), ('Callback Cats', 'Promise me'), ('Boolean Autocrats', '01100010 01101001 01101110 01100001 01110010 01111001'), ('Runtime Terror', 'Correndo contra o tempo'), ('Data Structure Deadheads', 'Pilhados'), ('FrontPage Freebirds', 'Fix the API method'), ('Backend Backboners', 'Fix your requests'), ('Syntax Terminators', ';;;;;;;;;;;;;;;;;');
        `);
        await queryRunner.query(`
            INSERT INTO skill (name, soft_skill) VALUES ('Comunicação', 1), ('Liderança', 1), ('Negociação', 1), ('Autogestão', 1), ('Trabalhar sob pressão', 1), ('Adaptação', 1), ('Solução de problemas', 1), ('Flexibilidade no trabalho', 1), ('Trabalho em equipe', 1), ('Tomada de decisão', 1), ('Testes unitários', 0), ('JavaScript', 0), ('Angular', 0), ('ReactJS', 0), ('HTML/CSS', 0), ('SQL', 0), ('TypeScript', 0), ('Git', 0), ('Criptografia', 0), ('Ciclos de desenvolvimento', 0);
        `);

        await queryRunner.query(`
            INSERT INTO person_to_skill (personId, skillId, level) VALUES (1, 12, 5), (1, 15, 7), (1, 17, 5), (1, 18, 8), (2, 11, 3), (2, 10, 10), (2, 4, 2), (2, 7, 9), (2, 3, 1), (3, 2, 7), (3, 1, 9), (3, 11, 10), (4, 5, 8),  (5, 11, 5), (5, 4, 8), (5, 9, 3), (5, 8, 8);
        `);

        await queryRunner.query(`
            INSERT INTO person_to_team (personId, teamId, user_active, leader) VALUES (1, 1, 1, 1), (1, 2, 0, 0), (2, 2, 1, 1), (3, 3, 1, 1),  (4, 4, 1, 1), (5, 5, 1, 1);
        `);

        await queryRunner.query(`
            INSERT INTO log (level, message, meta, timestamp) VALUES ('info', 'Seeding complete', '{}', current_timestamp());
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DELETE FROM person_to_skill;
        `);
        await queryRunner.query(`
        DELETE FROM person_to_team;
        `);
        await queryRunner.query(`
        DELETE FROM skill;
        `);
        await queryRunner.query(`
        DELETE FROM log;
        `);
        await queryRunner.query(`
        DELETE FROM person;
        `);
        await queryRunner.query(`
        DELETE FROM team;
        `);
    }

}
