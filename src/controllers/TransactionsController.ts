import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { TransactionsRepository } from "../repositories/TransactionsRepository";

class TransactionsController{
    async create(req: Request, res: Response){
    try{
        const {
            user_id,
            fundraising_id,
            value_donated
         } = req.body;
         const transactionRepository =getCustomRepository(TransactionsRepository)
         
         const transaction = transactionRepository.create({
          user_id,
          fundraising_id,
          value_donated
         });
         await transactionRepository.save(transaction);
         return res.json(transaction);
    }
    catch{
        return res.status(400).json({
            error:true,
            mensagem:"Transação não realizada"    
        })
    }
     
    }
    async get (req: Request, res: Response){
       try{
           const transactionRepository = getCustomRepository(TransactionsRepository);
           const transaction = await transactionRepository.find({})
           return res.json(transaction)
       }catch{
           return res.status(400).json({
               error: true,
               mensagem: "Nenhuma vaquinha encontrado!"
           })
       }
   }
 }
 
 
 export { TransactionsController };