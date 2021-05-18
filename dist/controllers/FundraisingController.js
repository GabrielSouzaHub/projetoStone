"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const FundraisingRepository_1 = require("../repositories/FundraisingRepository");
class FundraisingController {
    async create(req, res) {
        try {
            const fundraisingRepository = typeorm_1.getCustomRepository(FundraisingRepository_1.FundraisingRepository);
            const { fundraising_name, description, image, video, value_donated, goal_meta, validity, user_id } = req.body;
            const fundraising = fundraisingRepository.create({
                fundraising_name,
                description,
                image,
                video,
                value_donated,
                goal_meta,
                validity,
                user_id
            });
            await fundraisingRepository.save(fundraising);
            return res.json(fundraising);
        }
        catch (error) {
            return res.status(400).json({
                erro: true,
                mensagem: error
            });
        }
    }
    async get(req, res) {
        try {
            const fundraisingRepository = typeorm_1.getCustomRepository(FundraisingRepository_1.FundraisingRepository);
            const fundraising = await fundraisingRepository.find({});
            return res.json(fundraising);
        }
        catch (_a) {
            return res.status(400).json({
                error: true,
                mensagem: "Nenhuma vaquinha encontrada!"
            });
        }
    }
    async updateUser(req, res) {
        try {
            const fundraisingRepository = typeorm_1.getCustomRepository(FundraisingRepository_1.FundraisingRepository);
            const { id } = req.params;
            const user = await fundraisingRepository.findOne({ id: id });
            fundraisingRepository.merge(user, req.body);
            await fundraisingRepository.save(user);
            return res.json(user);
        }
        catch (_a) {
            return res.status(400).json({
                error: true,
                mensagem: "Usuário não encontrado!"
            });
        }
    }
}
exports.default = new FundraisingController();
