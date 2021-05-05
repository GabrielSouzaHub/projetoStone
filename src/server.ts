import express from "express";

const app = express();

app.get('/aqui', (req, res) =>{
   res.json({mensagem:'foi ai '})
})

app.listen(8080, () => {
   console.log("Server is running on port 8080")
})