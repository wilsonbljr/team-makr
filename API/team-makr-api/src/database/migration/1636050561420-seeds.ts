import {MigrationInterface, QueryRunner} from "typeorm";

export class seeds1636050561420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO soft_skill (\`name\`) VALUES ('Comunicação'), ('Liderança'), ('Negociação'), ('Autogestão'), ('Trabalhar sob pressão'), ('Adaptação'), ('Solução de problemas'), ('Flexibilidade no trabalho'), ('Trabalho em equipe'), ('Tomada de decisão'); 
        `);
        await queryRunner.query(`
            INSERT INTO hard_skill (\`name\`) VALUES ('Testes unitários'), ('JavaScript'), ('Angular'), ('ReactJS'), ('HTML/CSS'), ('SQL'), ('TypeScript'), ('Git'), ('Criptografia'), ('Ciclos de desenvolvimento');
        `);
        await queryRunner.query(`
            INSERT INTO team (\`name\`, \`description\`) VALUES ('Agile Applet', 'SCRUMMMMMMMM'), ('Abstract Connoisseurs', 'OOP rules'), ('Hypertext Assassins', 'HTML?'), ('Callback Cats', 'Promise me'), ('Boolean Autocrats', '01100010 01101001 01101110 01100001 01110010 01111001'), ('Runtime Terror', 'Correndo contra o tempo'), ('Data Structure Deadheads', 'Pilhados'), ('FrontPage Freebirds', 'Fix the API method'), ('Backend Backboners', 'Fix your requests'), ('Syntax Terminators', ';;;;;;;;;;;;;;;;;');
        `);
        await queryRunner.query(`
            INSERT INTO person (firstName, lastName, phone_number, pronoun) VALUES ('Wilson', 'Bley', '41987654321', 'He/Him'), ('Blake', 'Wilkins', '41986554321', 'He/Him'), ('Simon', 'Marshall', '41992654321', 'He/Him'), ('Stephanie', 'Dyer', '41987659232', 'She/Her'), ('Wanda', 'Russell', '41984654321', 'They/Them'), ('Carl', 'Edmunds', '41992654321', 'They/Them'), ('Ella', 'Patterson', '41987998721', 'She/Her'), ('Emma', 'Gray', '41993242221', 'She/Her'), ('Evan', 'Lawrence', '41987231321', 'He/Him'), ('Ian', 'Chapman', '41983244321', 'She/Her');
        `);
        await queryRunner.query(`
            INSERT INTO person_to_hard_skill (personId, hardskillId, \`level\`) VALUES (1, 2, 5), (1, 5, 7), (1, 7, 5), (1, 8, 8), (2, 1, 3), (2, 10, 10), (2, 4, 2), (2, 7, 9), (2, 3, 1), (3, 2, 7), (3, 1, 9), (3, 7, 10), (4, 5, 8),  (5, 1, 5), (5, 4, 8), (5, 9, 3), (5, 8, 8), (6, 1, 10),  (7, 4, 7), (7, 6, 4), (8, 2, 5), (8, 5, 9), (8, 8, 5), (9, 2, 5), (9, 1, 8), (9, 6, 4), (10, 5, 7);
        `);
        await queryRunner.query(`
            INSERT INTO person_to_soft_skill (personId, softskillId, \`level\`) VALUES (1, 2, 5), (1, 5, 7), (1, 7, 5), (1, 8, 8), (2, 1, 3), (2, 10, 10), (2, 4, 2), (2, 7, 9), (2, 3, 1), (3, 2, 7), (3, 1, 9), (3, 7, 10), (4, 5, 8),  (5, 1, 5), (5, 4, 8), (5, 9, 3), (5, 8, 8), (6, 1, 10),  (7, 4, 7), (7, 6, 4), (8, 2, 5), (8, 5, 9), (8, 8, 5), (9, 2, 5), (9, 1, 8), (9, 6, 4), (10, 5, 7);
        `);
        await queryRunner.query(`
            INSERT INTO person_to_team (personId, teamId, user_active, leader) VALUES (1, 1, 1, 1), (1, 2, 0, 0), (2, 2, 1, 1), (3, 3, 1, 1),  (4, 4, 1, 1), (5, 5, 1, 1), (6, 6, 1, 1), (6, 7, 0, 0), (7, 7, 0, 0), (8, 8, 1, 1), (8, 7, 0, 0), (8, 1, 0, 1), (9, 1, 1, 1), (10, 10, 1, 1);
        `);
        await queryRunner.query(`
            INSERT INTO log (\`description\`) VALUES ('Seeding complete');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DELETE FROM person_to_hard_skill;
        `);
        await queryRunner.query(`
        DELETE FROM person_to_soft_skill;
        `);
        await queryRunner.query(`
        DELETE FROM person_to_team;
        `);
        await queryRunner.query(`
        DELETE FROM hard_skill;
        `);
        await queryRunner.query(`
        DELETE FROM log;
        `);
        await queryRunner.query(`
        DELETE FROM person;
        `);
        await queryRunner.query(`
        DELETE FROM soft_skill;
        `);
        await queryRunner.query(`
        DELETE FROM team;
        `);
    }

}
