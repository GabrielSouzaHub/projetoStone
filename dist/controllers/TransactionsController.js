"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const TransactionsRepository_1 = require("../repositories/TransactionsRepository");
const UsersRepository_1 = require("../repositories/UsersRepository");
const FundraisingRepository_1 = require("../repositories/FundraisingRepository");
class TransactionsController {
    async create(req, res) {
        try {
            const { user_id, fundraising_id, value_donated } = req.body;
            const transactionRepository = typeorm_1.getCustomRepository(TransactionsRepository_1.TransactionsRepository);
            const transaction = transactionRepository.create({
                user_id,
                fundraising_id,
                value_donated
            });
            await findUser(transaction.user_id, transaction.value_donated);
            await findFundraising(transaction.fundraising_id, transaction.value_donated);
            await transactionRepository.save(transaction);
            return res.json(transaction);
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
async function findUser(id, coins) {
    try {
        const usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.UsersRepository);
        const user = await usersRepository.findOne({ id: id });
        coins = (user.coins - coins);
        usersRepository.merge(user, { "coins": coins });
        await usersRepository.save(user);
    }
    catch (error) {
        return {
            erro: true,
            mensagem: error
        };
    }
}
async function findFundraising(id, coins) {
    try {
        const fundraisingRepository = typeorm_1.getCustomRepository(FundraisingRepository_1.FundraisingRepository);
        const fundraising = await fundraisingRepository.findOne({ id: id });
        coins = (fundraising.value_donated + coins);
        fundraisingRepository.merge(fundraising, { "value_donated": coins });
        await fundraisingRepository.save(fundraising);
    }
    catch (error) {
        return {
            erro: true,
            mensagem: error
        };
    }
}
exports.default = new TransactionsController();
