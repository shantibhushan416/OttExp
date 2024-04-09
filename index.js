import express from "express";
import dotenv from "dotenv";
import config from "config";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/Route.js";
import Connection from "./database/DB.js";
import { error } from "./middlewares/error.js";
import DefaultData from "./default.js";


const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", routes)

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
};




app.use(error());

const PORT = 7000;

const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(userName, password);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

DefaultData()
