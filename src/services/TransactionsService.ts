import { getCustomRepository, Repository } from "typeorm";
import { Transactions } from "../models/Transactions";
import { TransactionsRepository } from "../repositories/TransactionsRepository";

interface ITransactionsCreate {
  user_id:string;
  fundraising_id:string;
  value_donated:number;
}
interface ITransactionsGetOnlyOne {
  id: string;
}

export class TransactionsService {
  private transactionsRepository: Repository<Transactions>;
  constructor(){
    this.transactionsRepository = getCustomRepository(TransactionsRepository);
  }
  async createTransaction({ user_id, fundraising_id, value_donated }: ITransactionsCreate) {
    const transaction = this.transactionsRepository.create({
      user_id,
      fundraising_id,
      value_donated
    });
    await this.transactionsRepository.save(transaction);
    return transaction;
  }
  async getTransactions() {
    return await this.transactionsRepository.find({});
  }
  async getOnlyOneTransaction({ id }: ITransactionsGetOnlyOne) {
    return await this.transactionsRepository.find({id: id});
  }
}
