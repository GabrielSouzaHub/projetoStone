import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersController {
    async create(req: Request, res: Response) {
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
            uf
        } = req.body;
        const usersRepository = getCustomRepository(UsersRepository);
    
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
            uf
        });
    
        await usersRepository.save(user);
    
        return res.json(user);
    }
}

export { UsersController };