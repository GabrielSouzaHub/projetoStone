import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFundraising1620922541573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"fundraising",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"fundraising_name",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name:"image",
                        type: "varchar"
                    },
                    {
                        name:"video",
                        type: "varchar"
                    },
                    {
                        name:"value_donated",
                        type:"number"
                    },
                    {
                        name:"goal_meta",
                        type:"number"
                    },
                    {
                        name:"validity",
                        type:"date"
                    },
                    {
                        name:"user_id",
                        type:"string"
                    },
                ],
                foreignKeys:[
                    {
                        name:"FKUser",
                        referencedTableName:"user", 
                        referencedColumnNames: ["id"],
                        columnNames:["user_id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("fundraising");
    }

}
