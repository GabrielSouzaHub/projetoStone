"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const typeorm_1 = require("typeorm");
const UsersRepository_1 = require("../repositories/UsersRepository");
class UsersService {
    constructor() {
        this.usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.UsersRepository);
    }
    async createUser({ email, profile_image }) {
        const user = this.usersRepository.create({
            email,
            profile_image,
        });
        const emailAlreadyExists = await this.usersRepository.findOne({
            email,
        });
        if (emailAlreadyExists) {
            throw new Error(`mensagem: "Nome de Usuário ou Email já existe"`);
        }
        await this.usersRepository.save(user);
        return user;
    }
    async getUsers() {
        return await this.usersRepository.find({});
    }
    async getOnlyOneUser({ id }) {
        return await this.usersRepository.findOne({ user_id: id });
    }
    async updateUser({ id }, att) {
        const user = await this.usersRepository.findOne({ user_id: id });
        this.usersRepository.merge(user, att);
        await this.usersRepository.save(user);
        return user;
    }
    async deleteUser({ id }) {
        await this.usersRepository.delete(id);
    }
}
exports.UsersService = UsersService;
