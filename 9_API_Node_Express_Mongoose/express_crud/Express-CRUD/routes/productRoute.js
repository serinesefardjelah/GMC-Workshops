import express from "express";
import { fetch_product } from "../controller/productController.js";

const route = express.Router();

route.get("/getallproducts", fetch);

export default route;
