"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const typeorm_1 = require("typeorm");
const TransactionsRepository_1 = require("../repositories/TransactionsRepository");
class TransactionsService {
    constructor() {
        this.transactionsRepository = typeorm_1.getCustomRepository(TransactionsRepository_1.TransactionsRepository);
    }
    async createTransaction({ user_id, fundraising_id, value_donated }) {
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
    async getOnlyOneTransaction({ id }) {
        return await this.transactionsRepository.find({ id: id });
    }
}
exports.TransactionsService = TransactionsService;
