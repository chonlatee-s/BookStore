import {MigrationInterface, QueryRunner} from "typeorm";

export class loginMigration1628922367523 implements MigrationInterface {
    name = 'loginMigration1628922367523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`book_store\`.\`login\` (\`loginId\` int NOT NULL AUTO_INCREMENT, \`uuid\` char(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_17921e1a195deb4322d4edfc5f\` (\`uuid\`), PRIMARY KEY (\`loginId\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_17921e1a195deb4322d4edfc5f\` ON \`book_store\`.\`login\``);
        await queryRunner.query(`DROP TABLE \`book_store\`.\`login\``);
    }

}
