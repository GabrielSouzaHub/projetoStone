import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { FundraisingRepository } from "../repositories/FunderaisingRepository";

class FundraisingController{
   async create(req: Request, res: Response){
      try{
      const fundraisingRepository = getCustomRepository(FundraisingRepository);
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
   } catch(error) {
      return res.status(400).json({
         erro: true,
         mensagem:error
     })  
   }
   }
   async get (req: Request, res: Response){
      try{
          const fundraisingRepository = getCustomRepository(FundraisingRepository);
          const fundraising = await fundraisingRepository.find({})
          return res.json(fundraising) 
      }catch{
          return res.status(400).json({
              error: true,
              mensagem: "Nenhuma vaquinha encontrada!"
          })
      }
  }
}


export { FundraisingController };