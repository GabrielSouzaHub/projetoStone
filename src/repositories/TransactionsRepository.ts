import { Repository, EntityRepository } from "typeorm";
import { Transactions } from "../models/Transactions";


@EntityRepository(Transactions)
class TransactionsRepository extends Repository<Transactions> {}

export {TransactionsRepository}