import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
// import {UsersService } from "../services/UsersService";
class UsersController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
        const usersRepository = getCustomRepository(UsersRepository);
        const {
            username, email, password, profile_image, coins,
            birth, phone_number, cep, street, state, city,
            uf, enabled
        } = req.body;
        const userAlreadyExists = await usersRepository.findOne({
            username,email
        })
            if(userAlreadyExists || email) {
                return res.status(400).json({mensagem:"Nome de Usuário já existe"})
            }
        const user = usersRepository.create({
            username, email, password, profile_image, coins,
            birth, phone_number, cep, street, state, city,
            uf, enabled                   
        });
         await usersRepository.save(user);
        return res.json(user);
        } catch {
            return res.status(400).json({
                erro: true,
                mensagem:"Usuário não cadastrado"
            })   
        }
    }
    async get (req: Request, res: Response): Promise<Response>{
        try{
            const usersRepository = getCustomRepository(UsersRepository);
            const users = await usersRepository.find({})
            return res.json(users) 
        }catch{
            return res.status(400).json({
                error: true,
                mensagem: "Nenhum usuário encontrado!"
            })
        }
    }
    async getOnlyOne (req: Request, res: Response): Promise<Response>{
        try{
            const usersRepository = getCustomRepository(UsersRepository);
            const {id} = req.params
            const user = await usersRepository.findOne({id:id})
            return res.json(user)
        }catch{
            return res.status(400).json({
                error: true,
                mensagem: "Usuário não encontrado!"
            })
        }
    }
    async deleted (req: Request, res: Response){
        try{
            const usersRepository = getCustomRepository(UsersRepository);
            const {id} = req.params
            const user = await usersRepository.findOne({id:id})
            await usersRepository.delete(user)
            return res.json({
                mensagem:"Deletado com sucesso",
                user:user
            })
        }catch(error){
            return res.status(400).json({
                erro: true,
                mensagem:error
            })
        }
    }
}

export { UsersController };