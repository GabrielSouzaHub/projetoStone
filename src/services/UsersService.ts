import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUsersCreate{
   username: string,
   email: string,
   password: string,
   profile_image:string,
   coins: number,
   birth:Date,
   phone_number:number,
   cep:string,
   street:string,
   state:string,
   city: string,
   uf: string
}

class UsersService {
   async create({ username,email,password,profile_image,coins,birth,phone_number,cep,street,state,city,uf}:IUsersCreate){
      const usersRepository = getCustomRepository(UsersRepository);
      const userAlreadyExists = usersRepository.findOne({
         username,
      })
      if(userAlreadyExists) {
         throw new Error("Usuário já existe")
      }
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
       return await usersRepository.save(user);
   }
 
}

export {UsersService}