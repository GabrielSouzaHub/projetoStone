"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const TransactionsRepository_1 = require("../repositories/TransactionsRepository");
const UsersRepository_1 = require("../repositories/UsersRepository");
const FundraisingRepository_1 = require("../repositories/FundraisingRepository");
const TransactionsService_1 = require("../services/TransactionsService");
class TransactionsController {
    async createTransaction(req, res) {
        try {
            const { user_id, fundraising_id, value_donated } = req.body;
            if (value_donated == 0 || value_donated < 0)
                throw new Error("Valor não permitido");
            await UpdateCoinsUser(user_id, value_donated);
            await UpdateCoinsFundraising(fundraising_id, value_donated);
            const transactionsService = new TransactionsService_1.TransactionsService();
            await transactionsService.createTransaction({ user_id, fundraising_id, value_donated });
            res.status(201).json({ Mensagem: "Transação cadastrada com sucesso!" });
        }
        catch (error) {
            return res.status(400).json({
                error: true,
                mensagem: error
            });
        }
    }
    async get(req, res) {
        try {
            const transactionRepository = typeorm_1.getCustomRepository(TransactionsRepository_1.TransactionsRepository);
            const transaction = await transactionRepository.find({});
            return res.json(transaction);
        }
        catch (_a) {
            return res.status(400).json({
                error: true,
                mensagem: "Nenhuma vaquinha encontrado!"
            });
        }
    }
}
async function UpdateCoinsUser(id, coins) {
    const usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.UsersRepository);
    const user = await usersRepository.findOne({ id: id });
    if (coins > user.coins)
        throw new Error("Usuário não possui moedas suficientes para esta transação");
    coins = (user.coins - coins);
    usersRepository.merge(user, { "coins": coins });
    await usersRepository.save(user);
}
async function UpdateCoinsFundraising(id, coins) {
    const fundraisingRepository = typeorm_1.getCustomRepository(FundraisingRepository_1.FundraisingRepository);
    const fundraising = await fundraisingRepository.findOne({ id: id });
    coins = (fundraising.value_donated + coins);
    fundraisingRepository.merge(fundraising, { "value_donated": coins });
    await fundraisingRepository.save(fundraising);
}
exports.default = new TransactionsController();
