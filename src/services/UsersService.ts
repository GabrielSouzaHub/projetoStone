import { getCustomRepository, Repository } from "typeorm";
import { User } from "../models/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUsersCreate {
  email: string;
  profile_image:string;
}

interface IUsersGetOnlyOneUser {
  id: string;
}

export class UsersService {
  private usersRepository: Repository<User>;
  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async createUser({ email, profile_image }: IUsersCreate) {

    const user = this.usersRepository.create({
      email, profile_image
    });
    
    const emailAlreadyExists = await this.usersRepository.findOne({
      email,
    });
    if (emailAlreadyExists) {
      throw new Error(`mensagem: "Nome de Usuário ou Email já existe"` )
    
    }
    await this.usersRepository.save(user);
    return user;
  }

  async getUsers() {
    return await this.usersRepository.find({});
  }

  async getOnlyOneUser({ id }: IUsersGetOnlyOneUser) {
    return await this.usersRepository.findOne({ id: id });
  }

  async updateUser({ id }: IUsersGetOnlyOneUser, att) {
    const user = await this.usersRepository.findOne({ id: id });
    this.usersRepository.merge(user, att);
    await this.usersRepository.save(user);
    return user;
  }
  
  async deleteUser({ id }: IUsersGetOnlyOneUser) {
    await this.usersRepository.delete(id);
  }
}
