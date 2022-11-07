import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666617487817 implements MigrationInterface {
    name = 'default1666617487817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" ADD "link" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "link"`);
    }

}
