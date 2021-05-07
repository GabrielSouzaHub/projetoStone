import mongoose from 'mongoose';
import { Response, Request } from 'express';
import "./../models/User-model";

const User = mongoose.model('user');
type Error = {
    error: string
}
export default function userControl(app) {
    app.get("/user", async (_: Request, res: Response) => {
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
    app.get("/user/:id", async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await User.findOne({ _id: id })
            return res.json(user)
        } catch (err) {
            return res.status(400).json({
                error: true,
                mensagem: "Nenhum usuário encontrado"
            })

        }
    })

    app.post("/user", async (req: Request, res: Response) => {
        const user = await User.create(req.body, (err: Error) => {
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
    app.put("/user/:id", async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            await User.updateOne({ _id: id }, req.body)
            return res.json({
                error: false,
                message: "Editado com sucesso",

            });
        } catch (err) {
            return res.status(400).json({
                error: true,
                message: "Erro: User não editado com sucesso"
            })

        }

    });
    app.delete("/user/:id", async (req: Request, res: Response) => {
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