import { MigrationInterface, QueryRunner } from "typeorm";

export class default1665154627211 implements MigrationInterface {
    name = 'default1665154627211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measurements" DROP CONSTRAINT "fk_parameter_id"`);
        await queryRunner.query(`ALTER TABLE "parameters" DROP CONSTRAINT "fk_parameterType_id"`);
        await queryRunner.query(`ALTER TABLE "parameters" DROP CONSTRAINT "fk_station_id"`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD "parameterId" integer`);
        await queryRunner.query(`ALTER TABLE "parameters" ADD "stationId" integer`);
        await queryRunner.query(`ALTER TABLE "parameters" ADD "parameterTypeId" integer`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD CONSTRAINT "FK_1f461b854f723a06c08f00fc54d" FOREIGN KEY ("parameterId") REFERENCES "parameters"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parameters" ADD CONSTRAINT "FK_51375f6c4187d5398e71e91dd3b" FOREIGN KEY ("stationId") REFERENCES "stations"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parameters" ADD CONSTRAINT "FK_311d5c3ef05e7cba9da10f6d55a" FOREIGN KEY ("parameterTypeId") REFERENCES "parametersType"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parameters" DROP CONSTRAINT "FK_311d5c3ef05e7cba9da10f6d55a"`);
        await queryRunner.query(`ALTER TABLE "parameters" DROP CONSTRAINT "FK_51375f6c4187d5398e71e91dd3b"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP CONSTRAINT "FK_1f461b854f723a06c08f00fc54d"`);
        await queryRunner.query(`ALTER TABLE "parameters" DROP COLUMN "parameterTypeId"`);
        await queryRunner.query(`ALTER TABLE "parameters" DROP COLUMN "stationId"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP COLUMN "parameterId"`);
        await queryRunner.query(`ALTER TABLE "parameters" ADD CONSTRAINT "fk_station_id" FOREIGN KEY ("id") REFERENCES "stations"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parameters" ADD CONSTRAINT "fk_parameterType_id" FOREIGN KEY ("id") REFERENCES "parametersType"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD CONSTRAINT "fk_parameter_id" FOREIGN KEY ("id") REFERENCES "parameters"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
