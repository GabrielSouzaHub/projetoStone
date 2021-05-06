import mongoose from 'mongoose';
import "./../models/Fundraising-model";

const Fundraising = mongoose.model('fundraising');

export default function fundraisingControl(app) {
   app.get("/fundraising", async (_, res) => {
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

   app.post("/fundraising", async (req, res) => {
      const fundraising = await Fundraising.create(req.body, (err) => {
         if (err) return res.status(400).json({
            error: true,
            message: err
         })
         return res.status(200).json({
            error: false,
            message: "Cadastrado com sucesso"
         })
      })
   });
   app.delete("/fundraising/:id", async (req, res) => {
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