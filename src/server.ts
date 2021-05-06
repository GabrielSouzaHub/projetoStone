import express from "express";
import mongoose from "mongoose";
import cors from "cors";

require("./models/createdb");

const port = 8080;
const app = express();
const User = mongoose.model('usuario');
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

app.get("/", async(req, res) =>{
   // pegando do banco 
   try{
    const user = await User.find({})
       return res.json(user);
   } catch(erro) {
       return res.status(400).json({
           error: true,
           message: "Nenhum artigo encontrado!"
       })
    }
   });
 
 app.post("/artigo", async (req, res) =>{
   //verifica se inseriu com sucesso
    const artigo = await User.create(req.body,(err) => {
   if(err) return res.status(400).json({
      error:true,
      message:"Erro"
   })
   return res.status(200).json({
      error:false,
      message:"Cadastrado com sucesso"
   })
})
});
app.listen(port, () => {
   console.log("Server is running on port 8080")
})