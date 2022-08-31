import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661913943059 implements MigrationInterface {
    name = 'default1661913943059'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measurements" ADD "id_sensor" integer`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD "id_sensorType" integer`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD CONSTRAINT "FK_b8fa0e1f0abce71b3393e2d3b18" FOREIGN KEY ("id_sensor") REFERENCES "sensors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_2e32a2f16323aa48cee94f9d43c" FOREIGN KEY ("id_sensorType") REFERENCES "sensorsType"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_2e32a2f16323aa48cee94f9d43c"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP CONSTRAINT "FK_b8fa0e1f0abce71b3393e2d3b18"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "id_sensorType"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP COLUMN "id_sensor"`);
    }

}
