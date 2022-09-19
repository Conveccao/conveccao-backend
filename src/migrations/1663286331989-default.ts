import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663286331989 implements MigrationInterface {
    name = 'default1663286331989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "measurements" ("id" SERIAL NOT NULL, "station_id" double precision NOT NULL, "value" double precision NOT NULL, "date_time" double precision NOT NULL, CONSTRAINT "PK_3c0e7812563f27fd68e8271661b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sensors" ("id" SERIAL NOT NULL, "station_id" double precision NOT NULL, "sensorType_id" double precision NOT NULL, "description" text NOT NULL, "model" text, "minrange" double precision, "maxrange" double precision, "accurace" double precision, "startdate" TIMESTAMP, "enddate" TIMESTAMP, CONSTRAINT "PK_b8bd5fcfd700e39e96bcd9ba6b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stations" ("id" SERIAL NOT NULL, "installation_date" text NOT NULL, "name" text NOT NULL, "lat" double precision NOT NULL, "lon" double precision NOT NULL, "reference" text NOT NULL, CONSTRAINT "PK_f047974bd453c85b08bab349367" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sensorsType" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "unit1" text NOT NULL, "factor1" double precision NOT NULL, "offset1" double precision NOT NULL, "unit2" text NOT NULL, "factor2" double precision NOT NULL, "offset2" double precision NOT NULL, "reference" text NOT NULL, "min" double precision NOT NULL, "max" double precision NOT NULL, CONSTRAINT "PK_3c5bfe107f0ff85f94539117a5a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sensorsType"`);
        await queryRunner.query(`DROP TABLE "stations"`);
        await queryRunner.query(`DROP TABLE "sensors"`);
        await queryRunner.query(`DROP TABLE "measurements"`);
    }

}
