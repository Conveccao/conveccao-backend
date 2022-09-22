import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663855583720 implements MigrationInterface {
    name = 'default1663855583720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measurements" RENAME COLUMN "station_id" TO "sensor_id"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "model"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "minrange"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "maxrange"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "accurace"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "startdate"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "enddate"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensors" ADD "enddate" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD "startdate" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD "accurace" double precision`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD "maxrange" double precision`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD "minrange" double precision`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD "model" text`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measurements" RENAME COLUMN "sensor_id" TO "station_id"`);
    }

}
