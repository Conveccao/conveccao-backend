import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664456027749 implements MigrationInterface {
    name = 'default1664456027749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "parameters" ("id" SERIAL NOT NULL, "station_id" double precision NOT NULL, "parameterType_id" double precision NOT NULL, CONSTRAINT "PK_6b03a26baa3161f87fa87588859" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parametersType" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "unit1" text NOT NULL, "factor1" double precision NOT NULL, "offset1" double precision NOT NULL, "unit2" text, "factor2" double precision, "offset2" double precision, "reference" text, "min" double precision, "max" double precision, CONSTRAINT "PK_384063acda889137b699812a591" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "parametersType"`);
        await queryRunner.query(`DROP TABLE "parameters"`);
    }

}
