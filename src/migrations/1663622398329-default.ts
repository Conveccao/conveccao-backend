import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663622398329 implements MigrationInterface {
    name = 'default1663622398329'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensorsType" ALTER COLUMN "unit2" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensorsType" ALTER COLUMN "factor2" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensorsType" ALTER COLUMN "offset2" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensorsType" ALTER COLUMN "reference" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensorsType" ALTER COLUMN "min" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensorsType" ALTER COLUMN "max" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensorsType" ALTER COLUMN "max" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensorsType" ALTER COLUMN "min" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensorsType" ALTER COLUMN "reference" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensorsType" ALTER COLUMN "offset2" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensorsType" ALTER COLUMN "factor2" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensorsType" ALTER COLUMN "unit2" SET NOT NULL`);
    }

}
