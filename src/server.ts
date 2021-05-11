import express from "express";
import "./database"
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()
// import userControl from "./controllers/User-controller";
import {routes} from "./routes"
const port = 8080;
const app = express();
app.use(cors());

app.use(express.json());

app.use(routes)

app.listen(port, () => {
   console.log("Server is running on port 8080")
})