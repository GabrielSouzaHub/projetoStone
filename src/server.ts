import express from "express";
import "./database";
import {routes} from "./routes";
import cors from "cors";

const port = 8080;
const app = express();
app.use(cors());

app.use(express.json());

app.use(routes)

app.listen(port, () => {
   console.log("Server is running on port 8080")
})