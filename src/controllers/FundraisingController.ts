import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { FundraisingRepository } from "../repositories/FunderaisingRepository";

class FundraisingController{
   async create(req: Request, res: Response){
      const {
         fundraising_name,
         created_at,
         description,
         image,
         video,
         value_donated,
         goal_meta,
         validity
      } = req.body;
      const fundraisingRepository =getCustomRepository(FundraisingRepository)
      
      const fundraising = fundraisingRepository.create({
         fundraising_name,
         created_at,
         description,
         image,
         video,
         value_donated,
         goal_meta,
         validity
      });
      await fundraisingRepository.save(fundraising);
      return res.json(fundraising);
   }
   async get (req: Request, res: Response){
      try{
          const fundraisingRepository = getCustomRepository(FundraisingRepository);
          const user = await fundraisingRepository.find({})
          return res.json(user) 
      }catch{
          return res.status(400).json({
              error: true,
              mensagem: "Nenhuma vaquinha encontrado!"
          })
      }
  }
}


export { FundraisingController };