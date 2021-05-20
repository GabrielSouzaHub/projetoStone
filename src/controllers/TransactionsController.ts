import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { TransactionsRepository } from "../repositories/TransactionsRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import { FundraisingRepository } from "../repositories/FundraisingRepository";
import { TransactionsService } from "../services/TransactionsService";

class TransactionsController {
  async createTransaction(req: Request, res: Response) {
    try {
      const {
        user_id,
        fundraising_id,
        value_donated
      } = req.body;
      if(value_donated==0 || value_donated<0) throw new Error("Valor não permitido");
      await UpdateCoinsUser( user_id, value_donated);
      await UpdateCoinsFundraising( fundraising_id, value_donated);
      const transactionsService = new TransactionsService();
      await transactionsService.createTransaction({ user_id, fundraising_id, value_donated });
      res.status(201).json({ Mensagem: "Transação cadastrada com sucesso!" });
    }
    catch (error) {
      return res.status(400).json({
        error: true,
        mensagem: error
      })
    }

  }
  async get(req: Request, res: Response) {
    try {
      const transactionRepository = getCustomRepository(TransactionsRepository);
      const transaction = await transactionRepository.find({})
      return res.json(transaction)
    } catch {
      return res.status(400).json({
        error: true,
        mensagem: "Nenhuma vaquinha encontrado!"
      })
    }
  }
}
async function UpdateCoinsUser(id, coins) {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findOne({ id: id });
    if(coins>user.coins) throw new Error("Usuário não possui moedas suficientes para esta transação");
    coins = (user.coins - coins);
    usersRepository.merge(user, { "coins": coins });
    await usersRepository.save(user);
}
async function UpdateCoinsFundraising(id, coins) {
    const fundraisingRepository = getCustomRepository(FundraisingRepository);
    const fundraising = await fundraisingRepository.findOne({ id: id });
    coins = (fundraising.value_donated + coins);
    fundraisingRepository.merge(fundraising, { "value_donated": coins });
    await fundraisingRepository.save(fundraising);
}


export default new TransactionsController();