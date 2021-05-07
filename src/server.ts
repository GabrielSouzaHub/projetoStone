import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userControl from "./controllers/User-controller";
import fundraisingControl from "./controllers/Fundraising-controller";

const port = 8080;
const app = express();
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

userControl(app);
fundraisingControl(app);

app.listen(port, () => {
   console.log("Server is running on port 8080")
})