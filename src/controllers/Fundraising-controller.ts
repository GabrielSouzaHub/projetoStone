import mongoose from 'mongoose';
import {Response, Request} from 'express';
import "./../models/Fundraising-model";

const Fundraising = mongoose.model('fundraising');

export default function fundraisingControl(app) {
   app.get("/fundraising", async (_:Request, res:Response) => {
      try {
         const fundraising = await Fundraising.find({})
         return res.json(fundraising);
      } catch (erro) {
         return res.status(400).json({
            error: true,
            message: "Nenhuma vaquinha encontrada!"
         })
      }
   });
   app.post("/fundraising", async (req:Request, res:Response) => {
      try{
         await Fundraising.create(req.body)
         return res.status(400).json({
            error: true,
            message: "Erro"
         })
      }catch (err){
         return res.status(200).json({
            error: false,
            message: "Cadastrado com sucesso"
         })
      }
   });
   app.put("/fundraising/:id", async (req:Request, res:Response) => {   
      try{
          const {id} = req.params
          await Fundraising.updateOne({_id: id}, req.body)
          return res.json({
              error:false,
              message:"Editado com sucesso",
            
           });
      }catch (err) {
          return res.status(400).json({
              error:true,
              message:"Erro: User não editado com sucesso" 
           })
         
      }

   });
   app.delete("/fundraising/:id", async (req:Request, res:Response) => {
      try {
         const id = req.params.id;
         await Fundraising.deleteOne({ _id: id })
         return res.status(200).json({
            error: false,
            message: "Deletado com sucesso"
         })
      } catch (err) {
         return res.status(400).json({
            error: true,
            message: "Erro"
         })
      }
   });
}