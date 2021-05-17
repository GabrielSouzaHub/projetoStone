import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { TransactionsRepository } from "../repositories/TransactionsRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import { FundraisingRepository } from "../repositories/FundraisingRepository";

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
         await findUser(transaction.user_id, transaction.value_donated);
         await findFundraising(transaction.fundraising_id, transaction.value_donated);
         await transactionRepository.save(transaction);
         return res.json(transaction);
    }
    catch(error){
        return res.status(400).json({
            error:true,
            mensagem:error    
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
async function findUser(id, coins){
    try{
        const usersRepository = getCustomRepository(UsersRepository);
        const user = await usersRepository.findOne({id:id});
        coins = (user.coins - coins);
        usersRepository.merge(user, {"coins":coins});
        await usersRepository.save(user);
     }catch(error){
         return {
             erro: true,
             mensagem:error
         }
     }
}
async function findFundraising(id, coins){
    try{
        const fundraisingRepository = getCustomRepository(FundraisingRepository);
        const fundraising = await fundraisingRepository.findOne({id:id});
        coins = (fundraising.value_donated + coins);
        fundraisingRepository.merge(fundraising, {"value_donated":coins});
        await fundraisingRepository.save(fundraising);
     }catch(error){
         return {
             erro: true,
             mensagem:error
         }
     }
}
 
 
 export default new TransactionsController();