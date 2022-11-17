import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668684048688 implements MigrationInterface {
    name = 'default1668684048688'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "alerts" ("id" SERIAL NOT NULL, "occurrence" text NOT NULL, "place" text NOT NULL, "date" text NOT NULL, "hour" text NOT NULL, CONSTRAINT "PK_60f895662df096bfcdfab7f4b96" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "alerts"`);
    }

}
