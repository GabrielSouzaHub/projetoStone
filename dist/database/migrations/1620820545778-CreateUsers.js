"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1620820545778 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsers1620820545778 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "user_id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "username",
                    type: "varchar",
                    isUnique: true,
                    isNullable: true,
                },
                {
                    name: "email",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "profile_image",
                    type: "varchar",
                },
                {
                    name: "coins",
                    type: "int",
                    default: 1000,
                },
                {
                    name: "birth",
                    type: "date",
                    isNullable: true,
                },
                {
                    name: "phone_number",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "enabled",
                    type: "boolean",
                    default: true,
                },
                {
                    name: "cep",
                    type: "char(9)",
                    isNullable: true,
                },
                {
                    name: "street",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "state",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "city",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "uf",
                    type: "char(2)",
                    isNullable: true,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateUsers1620820545778 = CreateUsers1620820545778;
