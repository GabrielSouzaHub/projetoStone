import express from "express";
import "./database";
import {routes} from "./routes";
import cors from "cors";

const port = 8080;
export const app = express();
app.use(cors());

app.use(express.json());

app.use(routes)

app.listen(process.env.PORT||port, () => {
 console.log(`Server running on localhost:${port}`);
})