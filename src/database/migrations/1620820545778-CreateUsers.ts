import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1620820545778 implements MigrationInterface {

public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isUnique:true,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique:true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "profile_image",
                        type: "varchar",
                    },
                    {
                        name: "coins",
                        type: "int",
                        default:1000,
                    },
                    {
                        name: "birth",
                        type: "date",
                    },
                    {
                        name: "phone_number",
                        type: "varchar",
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
                        isNullable:true,
                    },
                    {
                        name: "street",
                        type: "varchar",
                        isNullable:true,
                    },
                    {
                        name: "state",
                        type: "varchar",
                        isNullable:true,
                    },
                    {
                        name: "city",
                        type: "varchar",
                        isNullable:true,
                    },
                    {
                        name: "uf",
                        type: "char(2)",
                        isNullable:true,
                    },
                  
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
