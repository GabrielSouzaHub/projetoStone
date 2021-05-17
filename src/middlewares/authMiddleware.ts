import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
interface Idata {
      id:string;
      iat:number;
      exp:number;
}
export default function authMiddleware (req:Request, res:Response, next:NextFunction){
      const { authorization } = req.headers;

      if(!authorization){
            return res.status(401).json({Mensagem:"Usuário não autorizado"})
      }

      const token = authorization.replace("Bearer",'').trim();

      try {
            const data = jwt.verify(token, 'aquiesta')

            const {id} =data as Idata;
            req.userId = id;

            return next();
      } catch {
            return res.status(401)
      }
}