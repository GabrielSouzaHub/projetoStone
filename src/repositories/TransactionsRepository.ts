import { Repository, EntityRepository } from "typeorm";
import { Transactions } from "../entities/Transactions";


@EntityRepository(Transactions)
class TransactionsRepository extends Repository<Transactions> {}

export {TransactionsRepository}