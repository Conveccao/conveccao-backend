import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667474610508 implements MigrationInterface {
    name = 'default1667474610508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" ALTER COLUMN "lat" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stations" ALTER COLUMN "lon" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" ALTER COLUMN "lon" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stations" ALTER COLUMN "lat" SET NOT NULL`);
    }

}
