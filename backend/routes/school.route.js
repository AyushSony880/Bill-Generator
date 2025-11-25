import express from "express";
import { addSchool, editSchool, getSchool, removeSchool } from "../controller/school.controller.js";

const schoolRouter = express.Router();

schoolRouter.get("/get", getSchool);
schoolRouter.post("/add", addSchool);
schoolRouter.delete("/remove/:id", removeSchool);
schoolRouter.put("/edit", editSchool);

export default schoolRouter