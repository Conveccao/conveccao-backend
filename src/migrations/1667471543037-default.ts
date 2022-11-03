import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667471543037 implements MigrationInterface {
    name = 'default1667471543037'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" ADD "active" boolean`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "active"`);
    }

}
