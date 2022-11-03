import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667476106081 implements MigrationInterface {
    name = 'default1667476106081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "lat"`);
        await queryRunner.query(`ALTER TABLE "stations" ADD "lat" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "lon"`);
        await queryRunner.query(`ALTER TABLE "stations" ADD "lon" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stations" ALTER COLUMN "link" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" ALTER COLUMN "link" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "lon"`);
        await queryRunner.query(`ALTER TABLE "stations" ADD "lon" double precision`);
        await queryRunner.query(`ALTER TABLE "stations" DROP COLUMN "lat"`);
        await queryRunner.query(`ALTER TABLE "stations" ADD "lat" double precision`);
    }

}
