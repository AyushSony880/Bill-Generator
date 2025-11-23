import express from "express";
import { addProduct, getProduct, removeProduct } from "../controller/product.controller.js";

const productRouter = express.Router();

productRouter.get("/get", getProduct);
productRouter.post("/add", addProduct);
productRouter.delete("/remove/:id", removeProduct);

export default productRouter;
