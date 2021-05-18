import { getCustomRepository } from "typeorm";
import { TransactionsRepository } from "../repositories/TransactionsRepository";

interface ITransactionsCreate {
  user_id:string;
  fundraising_id:string;
  value_donated:number;
}

export class TransactionsService {
  async createFund({ user_id, fundraising_id, value_donated }: ITransactionsCreate) {
    const transactionRepository = getCustomRepository(TransactionsRepository)

    const transaction = transactionRepository.create({
      user_id,
      fundraising_id,
      value_donated
    });
    await transactionRepository.save(transaction);
  }
}
