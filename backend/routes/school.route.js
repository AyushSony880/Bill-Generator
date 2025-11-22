import express from "express";
import { addSchool, getSchool, removeSchool } from "../controller/school.controller.js";

const schoolRouter = express.Router();

schoolRouter.get("/get", getSchool);
schoolRouter.post("/add", addSchool);
schoolRouter.delete("/remove/:id", removeSchool);

export default schoolRouter