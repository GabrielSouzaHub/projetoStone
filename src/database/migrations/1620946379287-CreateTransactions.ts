import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTransactions1620946379287 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"transactions",
                columns: [
                    {
                        name:"user_id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"fundraising_id", 
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"value_donated",
                        type:"number"
                    },
                ],
                foreignKeys:[
                    {
                        name:"FKUser",
                        referencedTableName:"users", 
                        referencedColumnNames: ["id"],
                        columnNames:["user_id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("transactions")
    }

}
