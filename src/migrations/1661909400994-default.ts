import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661909400994 implements MigrationInterface {
    name = 'default1661909400994'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stations" ("id" SERIAL NOT NULL, "lat" double precision NOT NULL, "lon" double precision NOT NULL, "reference" character varying(150) NOT NULL, CONSTRAINT "PK_f047974bd453c85b08bab349367" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sensors" ("id" SERIAL NOT NULL, "description" text NOT NULL, "model" text, "minrange" double precision, "maxrange" double precision, "accurace" double precision, "startdate" TIMESTAMP, "enddate" TIMESTAMP, "id_station" integer, CONSTRAINT "PK_b8bd5fcfd700e39e96bcd9ba6b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "measurements" ("id" SERIAL NOT NULL, "value" double precision NOT NULL, "date_time" double precision NOT NULL, CONSTRAINT "PK_3c0e7812563f27fd68e8271661b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sensorsType" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "factor" double precision NOT NULL, "primary_measure" text NOT NULL, "secondary_measure" text NOT NULL, CONSTRAINT "PK_3c5bfe107f0ff85f94539117a5a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_395675f546e8c5fcc4e5f3c3918" FOREIGN KEY ("id_station") REFERENCES "stations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_395675f546e8c5fcc4e5f3c3918"`);
        await queryRunner.query(`DROP TABLE "sensorsType"`);
        await queryRunner.query(`DROP TABLE "measurements"`);
        await queryRunner.query(`DROP TABLE "sensors"`);
        await queryRunner.query(`DROP TABLE "stations"`);
    }

}
