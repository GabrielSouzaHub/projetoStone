import mongoose from 'mongoose';
import {Response, Request} from 'express';
import "./../models/User-model";

const User = mongoose.model('user');

export default class UsersController {
    async view(_:Request, res:Response){
        try {
            const user = await User.find({})
            return res.json(user);
        } catch (err) {
            return res.status(400).json({
                error: true,
                message: "Nenhum usuário encontrado!"
            })
        }
    };
    // app.get("/user/:id", async (req:Request, res:Response) => {
    //     try{
    //         const {id} = req.params;
    //         const user = await User.findOne({_id:id})
    //         return res.json(user)
    //     }catch (err) {
    //         return res.status(400).json({
    //             error:true,
    //             mensagem:"Nenhum usuário encontrado"
    //         })
    //     }
    // })

    async create (req:Request, res:Response){
        const {email, CPF} = req.body
       try{
            if(await User.findOne({email, CPF}))    
                return res.status(400).json({Mensagem:"Usuário já cadastrado"})

           await User.create(req.body)
           return res.status(200).json({
            error:false,
            message:"Cadastrado com sucesso"
         })
       }catch{
        return res.status(400).json({
            error:true,
            message:"Erro"
         })
       }
    }
    // app.put("/user/:id", async (req:Request, res:Response) => {   
    //     try{
    //         const {id} = req.params
    //         await User.updateOne({_id: id}, req.body)
    //         return res.json({
    //             error:false,
    //             message:"Editado com sucesso",
              
    //          });
    //     }catch{
    //         return res.status(400).json({
    //             error:true,
    //             message:"Erro: User não editado com sucesso" 
    //          })
           
    //     }

    //  });
    // app.delete("/user/:id", async (req:Request, res:Response) => {
    //     try {
    //         const id = req.params.id;
    //         await User.deleteOne({ _id: id })
    //         return res.status(200).json({
    //             error: false,
    //             message: "Deletado com sucesso"
    //         })
    //     } catch  {
    //         return res.status(400).json({
    //             error: true,
    //             message: "Erro"
    //         })
    //     }
    // });
}