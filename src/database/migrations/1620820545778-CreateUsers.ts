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
                    },
                    {
                        name: "email",
                        type: "varchar",
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
                        default:1000
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
                        default: "true",
                    },
                    {
                        name: "cep",
                        type: "char(9)",
                    },
                    {
                        name: "street",
                        type: "varchar",
                    },
                    {
                        name: "state",
                        type: "varchar",
                    },
                    {
                        name: "city",
                        type: "varchar",
                    },
                    {
                        name: "uf",
                        type: "char(2)",
                    },
                  
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
