"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsersService_1 = require("../services/UsersService");
class UsersController {
    async createUser(req, res) {
        try {
            const { email, profile_image } = req.body;
            const usersService = new UsersService_1.UsersService();
            await usersService.createUser({ email, profile_image });
            res.status(201).json({ Mensagem: "Usuário cadastrado com sucesso" });
        }
        catch (error) {
            res.status(400).json({
                erro: error,
                mensagem: "Usuário não cadastrado",
                tentativa: req.body,
            });
        }
    }
    async getUsers(req, res) {
        try {
            return res.json(await new UsersService_1.UsersService().getUsers());
        }
        catch (_a) {
            return res.status(400).json({
                error: true,
                mensagem: "Nenhum usuário encontrado!",
            });
        }
    }
    async getOnlyOneUser(req, res) {
        try {
            const { id } = req.params;
            const usersService = new UsersService_1.UsersService();
            const user = await usersService.getOnlyOneUser({ id });
            return res.json(user);
        }
        catch (_a) {
            return res.status(400).json({
                error: true,
                mensagem: "Usuário não encontrado!",
            });
        }
    }
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const usersService = new UsersService_1.UsersService();
            const user = await usersService.updateUser({ id }, req.body);
            return res.json(user);
        }
        catch (_a) {
            return res.status(400).json({
                error: true,
                mensagem: "Usuário não encontrado!",
            });
        }
    }
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const usersService = new UsersService_1.UsersService();
            usersService.deleteUser({ id });
            return res.json({
                mensagem: "Deletado com sucesso",
            });
        }
        catch (error) {
            return res.status(400).json({
                erro: true,
                mensagem: error,
            });
        }
    }
}
exports.default = new UsersController();
