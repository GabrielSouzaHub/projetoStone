"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const UsersRepository_1 = require("../repositories/UsersRepository");
class UsersController {
    index(req, res) {
        return res.send({ userID: req.userId });
    }
    async createUser(req, res) {
        try {
            const usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.UsersRepository);
            const { username, email, password, profile_image, birth, phone_number, street, state, city, uf, enabled } = req.body;
            const userAlreadyExists = await usersRepository.findOne({
                username
            });
            const emailAlreadyExists = await usersRepository.findOne({
                email
            });
            if (userAlreadyExists || emailAlreadyExists) {
                return res.status(400).json({ mensagem: "Nome de Usuário ou Email já existe" });
            }
            const user = usersRepository.create({
                username, email, password, profile_image,
                birth, phone_number, street, state, city,
                uf, enabled
            });
            await usersRepository.save(user);
            return res.status(201).json({ Mensagem: "Usuário cadastrado com sucesso" });
        }
        catch (error) {
            return res.status(400).json({
                erro: error,
                mensagem: "Usuário não cadastrado"
            });
        }
    }
    async getUsers(req, res) {
        try {
            const usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.UsersRepository);
            const users = await usersRepository.find({});
            return res.json(users);
        }
        catch (_a) {
            return res.status(400).json({
                error: true,
                mensagem: "Nenhum usuário encontrado!"
            });
        }
    }
    async getOnlyOneUser(req, res) {
        try {
            const usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.UsersRepository);
            const { id } = req.params;
            const user = await usersRepository.findOne({ id: id });
            return res.json(user);
        }
        catch (_a) {
            return res.status(400).json({
                error: true,
                mensagem: "Usuário não encontrado!"
            });
        }
    }
    async updateUser(req, res) {
        try {
            const usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.UsersRepository);
            const { id } = req.params;
            const user = await usersRepository.findOne({ id: id });
            usersRepository.merge(user, req.body);
            await usersRepository.save(user);
            return res.json(user);
        }
        catch (_a) {
            return res.status(400).json({
                error: true,
                mensagem: "Usuário não encontrado!"
            });
        }
    }
    async deleteUser(req, res) {
        try {
            const usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.UsersRepository);
            const { id } = req.params;
            const user = await usersRepository.findOne({ id: id });
            await usersRepository.delete(user);
            return res.json({
                mensagem: "Deletado com sucesso",
                user: user
            });
        }
        catch (error) {
            return res.status(400).json({
                erro: true,
                mensagem: error
            });
        }
    }
}
exports.default = new UsersController();
