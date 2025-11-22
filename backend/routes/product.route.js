import express from "express";
import { getProduct, removeProduct } from "../controller/product.controller.js";

const productRouter = express.Router();

productRouter.get("/get", getProduct);
productRouter.delete("/remove/:id", removeProduct);

export default productRouter;
