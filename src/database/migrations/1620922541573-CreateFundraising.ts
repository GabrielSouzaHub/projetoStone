import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFundraising1620922541573 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "fundraising",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "fundraising_name",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "video",
            type: "varchar",
          },
          {
            name: "value_donated",
            type: "int",
          },
          {
            name: "goal_meta",
            type: "int",
          },
          {
            name: "validity",
            type: "date",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUser",
            referencedTableName: "users",
            referencedColumnNames: ["user_id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("fundraising");
  }
}
