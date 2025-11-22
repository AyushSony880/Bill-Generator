import express from "express";
import { addSchool, getSchool } from "../controller/school.controller.js";

const schoolRouter = express.Router();

schoolRouter.get("/get", getSchool);
schoolRouter.post("/add", addSchool);

export default schoolRouter