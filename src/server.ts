import express from "express";
import mongoose from "mongoose";
import cors from "cors";

require("./infra/createdb");

const port = 8080;
const app = express();
const Vaquinha = mongoose.model('vaquinha');
app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost/vaquinha', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(()=>{
   console.log('Conexão realizada');
}).catch((e)=>{
   console.log(`${e}: Erro na conexão`);
})

app.get("/", (req, res) =>{
   // pegando do banco 
    Vaquinha.find({}).then(vaquinha => {
       return res.json(vaquinha);
   }).catch(erro => {
       return res.status(400).json({
           error: true,
           message: "Nenhum artigo encontrado!"
       })
    })
 });

app.listen(port, () => {
   console.log("Server is running on port 8080")
})