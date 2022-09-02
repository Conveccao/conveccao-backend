import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662058858289 implements MigrationInterface {
    name = 'default1662058858289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_f037cfe5209ec3fd74dd26c5f04"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_fabcc9218257d085c585650c9e5"`);
        await queryRunner.query(`ALTER TABLE "sensors" ALTER COLUMN "station_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensors" ALTER COLUMN "sensorType_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_f037cfe5209ec3fd74dd26c5f04" FOREIGN KEY ("station_id") REFERENCES "stations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_fabcc9218257d085c585650c9e5" FOREIGN KEY ("sensorType_id") REFERENCES "sensorsType"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_fabcc9218257d085c585650c9e5"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_f037cfe5209ec3fd74dd26c5f04"`);
        await queryRunner.query(`ALTER TABLE "sensors" ALTER COLUMN "sensorType_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensors" ALTER COLUMN "station_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_fabcc9218257d085c585650c9e5" FOREIGN KEY ("sensorType_id") REFERENCES "sensorsType"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_f037cfe5209ec3fd74dd26c5f04" FOREIGN KEY ("station_id") REFERENCES "stations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
