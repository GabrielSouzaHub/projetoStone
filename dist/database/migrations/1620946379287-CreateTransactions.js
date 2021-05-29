"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactions1620946379287 = void 0;
const typeorm_1 = require("typeorm");
class CreateTransactions1620946379287 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "transactions",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "user_id",
                    type: "uuid",
                },
                {
                    name: "fundraising_id",
                    type: "uuid",
                },
                {
                    name: "value_donated",
                    type: "number"
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
                    columnNames: ["user_id"]
                },
                {
                    name: "FKFundraising",
                    referencedTableName: "fundraising",
                    referencedColumnNames: ["id"],
                    columnNames: ["fundraising_id"]
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("transactions");
    }
}
exports.CreateTransactions1620946379287 = CreateTransactions1620946379287;
