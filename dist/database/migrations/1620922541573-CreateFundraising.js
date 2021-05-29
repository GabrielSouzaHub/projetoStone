"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFundraising1620922541573 = void 0;
const typeorm_1 = require("typeorm");
class CreateFundraising1620922541573 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("fundraising");
    }
}
exports.CreateFundraising1620922541573 = CreateFundraising1620922541573;
