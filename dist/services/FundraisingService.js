"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundraisingService = void 0;
const typeorm_1 = require("typeorm");
const FundraisingRepository_1 = require("../repositories/FundraisingRepository");
class FundraisingService {
    constructor() {
        this.fundraisingRepository = typeorm_1.getCustomRepository(FundraisingRepository_1.FundraisingRepository);
    }
    async createFundraising({ fundraising_name, description, image, video, value_donated, goal_meta, validity, user_id }) {
        const fundraising = this.fundraisingRepository.create({
            fundraising_name,
            description,
            image,
            video,
            value_donated,
            goal_meta,
            validity,
            user_id
        });
        await this.fundraisingRepository.save(fundraising);
        return fundraising;
    }
    async getFundraisings() {
        return await this.fundraisingRepository.find({});
    }
    async getOnlyOneFundraising({ id }) {
        return await this.fundraisingRepository.findOne({ id: id });
    }
    async updateFundraising({ id }, att) {
        const fundraising = await this.fundraisingRepository.findOne({ id: id });
        this.fundraisingRepository.merge(fundraising, att);
        await this.fundraisingRepository.save(fundraising);
        return fundraising;
    }
}
exports.FundraisingService = FundraisingService;
