import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTransactions1620946379287 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"transactions",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"user_id",
                        type:"uuid",                      
                    },
                    {
                        name:"fundraising_id", 
                        type:"uuid",                      
                    },
                    {
                        name:"value_donated",
                        type:"number"
                    },
                    {
                        name: "created_at",
                        type:"timestamp",
                        default:"now()",
                    },
                ],
                foreignKeys:[
                    {
                        name:"FKUser",
                        referencedTableName:"users", 
                        referencedColumnNames: ["id"],
                        columnNames:["user_id"]
                    },
                    {
                        name:"FKFundraising",
                        referencedTableName:"fundraising", 
                        referencedColumnNames: ["id"],
                        columnNames:["fundraising_id"]
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("transactions")
    }

}
