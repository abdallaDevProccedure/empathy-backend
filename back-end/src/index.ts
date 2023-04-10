import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();


const app = express();

app.use('/files', express.static(path.resolve()))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
})

app.use(express.json());

routes(app);

app.listen(3001, () => {
  console.log("servidor iniciou");
});
