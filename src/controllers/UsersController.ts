import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersController {
    index(req: Request, res: Response){
        return res.send({userID:req.userId})
    }
    async createUser(req: Request, res: Response): Promise<Response> {
        try {
        const usersRepository = getCustomRepository(UsersRepository);
        const{
            username, email, password, profile_image,
            birth, phone_number, street, state, city,
            uf, enabled
        } = req.body;
     
        const userAlreadyExists = await usersRepository.findOne({
            username
        })
        const emailAlreadyExists = await usersRepository.findOne({
            email
        })
            if(userAlreadyExists || emailAlreadyExists) {
                return res.status(400).json({mensagem:"Nome de Usuário ou Email já existe"})
            }
        const user = usersRepository.create({
            username, email, password, profile_image,
            birth, phone_number, street, state, city,
            uf, enabled                   
        });
         await usersRepository.save(user);
        return res.status(201).json({Mensagem:"Usuário cadastrado com sucesso"});
        } catch(error){
            return res.status(400).json({
                erro: error,
                mensagem:"Usuário não cadastrado"
            })   
        }
    }
    async getUsers (req: Request, res: Response): Promise<Response>{
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
    async getOnlyOneUser (req: Request, res: Response): Promise<Response>{
        try{
            const usersRepository = getCustomRepository(UsersRepository);
            const {id} = req.params;
            const user = await usersRepository.findOne({id:id});
            return res.json(user);
        }catch{
            return res.status(400).json({
                error: true,
                mensagem: "Usuário não encontrado!"
            })
        }
    }
    async updateUser (req: Request, res: Response): Promise<Response>{
        try{
            const usersRepository = getCustomRepository(UsersRepository);
            const {id} = req.params;
            const user = await usersRepository.findOne({id:id});
            usersRepository.merge(user, req.body);
            await usersRepository.save(user);
            return res.json(user)
        }catch{
            return res.status(400).json({
                error: true,
                mensagem: "Usuário não encontrado!"
            })
        }
    }
    async deleteUser (req: Request, res: Response){
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

export default new UsersController ();