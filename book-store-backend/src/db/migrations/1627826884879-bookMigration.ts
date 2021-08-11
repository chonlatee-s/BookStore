import {MigrationInterface, QueryRunner} from "typeorm";

export class bookMigration1627826884879 implements MigrationInterface {
    name = 'bookMigration1627826884879'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`book_store\`.\`book\` (\`bookId\` int NOT NULL AUTO_INCREMENT, \`uuid\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`price\` int NOT NULL, UNIQUE INDEX \`IDX_0a5875eb5ec460206c670c3b62\` (\`uuid\`), PRIMARY KEY (\`bookId\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_0a5875eb5ec460206c670c3b62\` ON \`book_store\`.\`book\``);
        await queryRunner.query(`DROP TABLE \`book_store\`.\`book\``);
    }

}
