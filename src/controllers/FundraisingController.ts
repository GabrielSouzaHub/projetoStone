import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { FundraisingRepository } from "../repositories/FundraisingRepository";
import { FundraisingService } from "../services/FundraisingService";

class FundraisingController {
  async createFundraising(req: Request, res: Response) {
    try {
      const {
        fundraising_name,
        description,
        image,
        video,
        value_donated,
        goal_meta,
        validity,
        user_id
      } = req.body;
      const fundraisingService = new FundraisingService();
      const fundraising = await fundraisingService.createFundraising({ fundraising_name, description, image, video, value_donated, goal_meta, validity, user_id });
      return res.json(fundraising);
    } catch (error) {
      return res.status(400).json({
        erro: true,
        mensagem: error
      })
    }
  }
  async getFundraisings(req: Request, res: Response) {
    try {
      const fundraisingService = new FundraisingService();
      const fundraisings = await fundraisingService.getFundraisings();
      return res.json(fundraisings);
    } catch {
      return res.status(400).json({
        error: true,
        mensagem: "Nenhuma vaquinha encontrada!"
      })
    }
  }
  async getOnlyOneFundraising(req: Request, res: Response) {
    try {
      const {
        id
      } = req.params;
      const fundraisingService = new FundraisingService();
      const fundraising = await fundraisingService.getOnlyOneFundraising({ id });
      return res.json(fundraising);
    } catch {
      return res.status(400).json({
        error: true,
        mensagem: "Nenhuma vaquinha encontrada!"
      })
    }
  }
  async updateFundraising(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const fundraisingService = new FundraisingService();
      const fundraising = await fundraisingService.updateFundraising({ id }, req.body);
      return res.json(fundraising);
    } catch {
      return res.status(400).json({
        error: true,
        mensagem: "Vaquinha não encontrada!"
      })
    }
  }
}


export default new FundraisingController();