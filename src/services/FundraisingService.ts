import { getCustomRepository, Repository } from "typeorm";
import { Fundraising } from "../models/Fundraising";
import { FundraisingRepository } from "../repositories/FundraisingRepository";

interface IFundraisingCreate {
  fundraising_name: string;
  description: string;
  image: string;
  video: string;
  value_donated: number;
  goal_meta: number;
  validity: Date;
  user_id: string;
}

interface IFundraisingGetOnlyOne {
  id: string;
}

export class FundraisingService {
  private fundraisingRepository: Repository<Fundraising>;
  constructor() {
    this.fundraisingRepository = getCustomRepository(FundraisingRepository);
  }
  async createFundraising({ fundraising_name, description, image, video, value_donated, goal_meta, validity, user_id }: IFundraisingCreate) {
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
  async getOnlyOneFundraising({ id }: IFundraisingGetOnlyOne) {
    return await this.fundraisingRepository.findOne({ id: id});
  }
  async updateFundraising({ id }: IFundraisingGetOnlyOne, att) {
    const fundraising = await this.fundraisingRepository.findOne({ id: id });
    this.fundraisingRepository.merge(fundraising, att);
    await this.fundraisingRepository.save(fundraising);
    return fundraising;
  }
}