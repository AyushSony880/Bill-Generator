import express from "express";
import { getSchool } from "../controller/school.controller.js";

const schoolRouter = express.Router();

schoolRouter.get("/get", getSchool);

export default schoolRouter