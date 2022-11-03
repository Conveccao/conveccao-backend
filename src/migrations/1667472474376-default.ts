import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667472474376 implements MigrationInterface {
    name = 'default1667472474376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" ALTER COLUMN "active" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stations" ALTER COLUMN "active" DROP NOT NULL`);
    }

}
