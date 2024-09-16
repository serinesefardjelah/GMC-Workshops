import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import user_route from "./routes/userRoute.js";
import product_route from "./routes/productRoute.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected Successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api/user", user_route);
app.use("/api/product", product_route);
