"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FundraisingService_1 = require("../services/FundraisingService");
class FundraisingController {
    async createFundraising(req, res) {
        try {
            const { fundraising_name, description, image, video, value_donated, goal_meta, validity, user_id } = req.body;
            const fundraisingService = new FundraisingService_1.FundraisingService();
            const fundraising = await fundraisingService.createFundraising({ fundraising_name, description, image, video, value_donated, goal_meta, validity, user_id });
            return res.json(fundraising);
        }
        catch (error) {
            return res.status(400).json({
                erro: true,
                mensagem: error
            });
        }
    }
    async getFundraisings(req, res) {
        try {
            const fundraisingService = new FundraisingService_1.FundraisingService();
            const fundraisings = await fundraisingService.getFundraisings();
            return res.json(fundraisings);
        }
        catch (_a) {
            return res.status(400).json({
                error: true,
                mensagem: "Nenhuma vaquinha encontrada!"
            });
        }
    }
    async getOnlyOneFundraising(req, res) {
        try {
            const { id } = req.params;
            const fundraisingService = new FundraisingService_1.FundraisingService();
            const fundraising = await fundraisingService.getOnlyOneFundraising({ id });
            return res.json(fundraising);
        }
        catch (_a) {
            return res.status(400).json({
                error: true,
                mensagem: "Nenhuma vaquinha encontrada!"
            });
        }
    }
    async updateFundraising(req, res) {
        try {
            const { id } = req.params;
            const fundraisingService = new FundraisingService_1.FundraisingService();
            const fundraising = await fundraisingService.updateFundraising({ id }, req.body);
            return res.json(fundraising);
        }
        catch (_a) {
            return res.status(400).json({
                error: true,
                mensagem: "Vaquinha não encontrada!"
            });
        }
    }
}
exports.default = new FundraisingController();
