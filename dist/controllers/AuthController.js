// import { Request, Response } from "express";
// import { getRepository } from "typeorm";
// import { User } from "../models/User";
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// class AuthController {
//    async auth(req: Request, res: Response){
//       try{ 
//          const usersRepository = getRepository(User);
//          const{email, password} = req.body;
//          const user = await usersRepository.findOne({ where: {email}})
//          const isValidPassword = await bcrypt.compare(password, user.password);
//          if(!user && !isValidPassword)
//             return res.sendStatus(401);
//           const token = jwt.sign({id: user.id} ,'aquiesta', {expiresIn:'1d'});
//           delete (user.password)
//           return res.json({
//              user,token,
//           })
//          }catch (error){
//             return res.json(error)
//          }
//    }
// }
// export default new AuthController()
