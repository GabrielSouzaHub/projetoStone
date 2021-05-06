import mongoose from 'mongoose';
import "./../models/User-model";

const User = mongoose.model('user');

export default function userControl(app) {
    app.get("/user", async (_, res) => {
        try {
            const user = await User.find({})
            return res.json(user);
        } catch (err) {
            return res.status(400).json({
                error: true,
                message: "Nenhum usuário encontrado!"
            })
        }
    });

    app.post("/user", async (req, res) => {
        //verifica se inseriu com sucesso
        const artigo = await User.create(req.body, (err) => {
            if (err) return res.status(400).json({
                error: true,
                message: "Erro"
            })
            return res.status(200).json({
                error: false,
                message: "Cadastrado com sucesso"
            })
        })
    });
    app.delete("/user/:id", async (req, res) => {
        try {
            const id = req.params.id;
            await User.deleteOne({ _id: id })
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