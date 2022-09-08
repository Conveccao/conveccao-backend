import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662386443016 implements MigrationInterface {
    name = 'default1662386443016'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "measurements" ("id" SERIAL NOT NULL, "sensor_id" double precision NOT NULL, "value" double precision NOT NULL, "date_time" double precision NOT NULL, CONSTRAINT "PK_3c0e7812563f27fd68e8271661b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sensors" ("id" SERIAL NOT NULL, "station_id" double precision NOT NULL, "sensorType_id" double precision NOT NULL, "description" text NOT NULL, "model" text, "minrange" double precision, "maxrange" double precision, "accurace" double precision, "startdate" TIMESTAMP, "enddate" TIMESTAMP, CONSTRAINT "PK_b8bd5fcfd700e39e96bcd9ba6b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stations" ("id" SERIAL NOT NULL, "lat" double precision NOT NULL, "lon" double precision NOT NULL, "reference" text NOT NULL, CONSTRAINT "PK_f047974bd453c85b08bab349367" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sensorsType" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "factor" double precision NOT NULL, "primary_measure" text NOT NULL, "secondary_measure" text NOT NULL, CONSTRAINT "PK_3c5bfe107f0ff85f94539117a5a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sensorsType"`);
        await queryRunner.query(`DROP TABLE "stations"`);
        await queryRunner.query(`DROP TABLE "sensors"`);
        await queryRunner.query(`DROP TABLE "measurements"`);
    }

}
