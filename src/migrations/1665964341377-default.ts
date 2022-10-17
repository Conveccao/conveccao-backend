import { MigrationInterface, QueryRunner } from "typeorm";

export class default1665964341377 implements MigrationInterface {
    name = 'default1665964341377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parameters" ADD "active" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parameters" DROP COLUMN "active"`);
    }

}
