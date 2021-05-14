import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
// import {UsersService } from "../services/UsersService";
class UsersController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
        const usersRepository = getCustomRepository(UsersRepository);
        const {
            username,
            email,
            password,
            profile_image,
            coins,
            birth,
            phone_number,
            cep,
            street,
            state,
            city,
            uf,
        } = req.body;
        const user = usersRepository.create({
            username,
            email,
            password,
            profile_image,
            coins,
            birth,
            phone_number,
            cep,
            street,
            state,
            city,
            uf,                   
        });
         await usersRepository.save(user);
        return res.json(user);
        } catch (error) {
            return res.status(400).json({
                erro: true,
                mensagem:error
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
            await usersRepository.findOne({id:id})
        }catch{

        }
    }
}

export { UsersController };