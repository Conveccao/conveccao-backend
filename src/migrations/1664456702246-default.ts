import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664456702246 implements MigrationInterface {
    name = 'default1664456702246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measurements" RENAME COLUMN "sensor_id" TO "parameter_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measurements" RENAME COLUMN "parameter_id" TO "sensor_id"`);
    }

}
