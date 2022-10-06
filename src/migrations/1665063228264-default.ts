import { MigrationInterface, QueryRunner } from "typeorm";

export class default1665063228264 implements MigrationInterface {
    name = 'default1665063228264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stations" ("id" SERIAL NOT NULL, "installation_date" text NOT NULL, "name" text NOT NULL, "lat" double precision NOT NULL, "lon" double precision NOT NULL, "reference" text NOT NULL, CONSTRAINT "PK_f047974bd453c85b08bab349367" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "measurements" ("id" SERIAL NOT NULL, "value" double precision NOT NULL, "date_time" double precision NOT NULL, "parameterId" integer, CONSTRAINT "PK_3c0e7812563f27fd68e8271661b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parameters" ("id" SERIAL NOT NULL, "stationId" integer, "parameterTypeId" integer, CONSTRAINT "PK_6b03a26baa3161f87fa87588859" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parametersType" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "unit1" text NOT NULL, "factor1" double precision NOT NULL, "offset1" double precision NOT NULL, "unit2" text, "factor2" double precision, "offset2" double precision, "reference" text, "min" double precision, "max" double precision, CONSTRAINT "PK_384063acda889137b699812a591" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "photo" text NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD CONSTRAINT "FK_1f461b854f723a06c08f00fc54d" FOREIGN KEY ("parameterId") REFERENCES "parameters"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parameters" ADD CONSTRAINT "FK_51375f6c4187d5398e71e91dd3b" FOREIGN KEY ("stationId") REFERENCES "stations"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parameters" ADD CONSTRAINT "FK_311d5c3ef05e7cba9da10f6d55a" FOREIGN KEY ("parameterTypeId") REFERENCES "parametersType"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parameters" DROP CONSTRAINT "FK_311d5c3ef05e7cba9da10f6d55a"`);
        await queryRunner.query(`ALTER TABLE "parameters" DROP CONSTRAINT "FK_51375f6c4187d5398e71e91dd3b"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP CONSTRAINT "FK_1f461b854f723a06c08f00fc54d"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "parametersType"`);
        await queryRunner.query(`DROP TABLE "parameters"`);
        await queryRunner.query(`DROP TABLE "measurements"`);
        await queryRunner.query(`DROP TABLE "stations"`);
    }

}