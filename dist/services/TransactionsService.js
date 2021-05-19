"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const typeorm_1 = require("typeorm");
const TransactionsRepository_1 = require("../repositories/TransactionsRepository");
class TransactionsService {
    async createFund({ user_id, fundraising_id, value_donated }) {
        const transactionRepository = typeorm_1.getCustomRepository(TransactionsRepository_1.TransactionsRepository);
        const transaction = transactionRepository.create({
            user_id,
            fundraising_id,
            value_donated
        });
        await transactionRepository.save(transaction);
    }
}
exports.TransactionsService = TransactionsService;
