import express from "express";
import {
  addMonthlyRecord,
  getMonthlyRecord,
} from "../controller/monthlyRecord.controller.js";

const monthlyRecordRouter = express.Router();

monthlyRecordRouter.get("/get", getMonthlyRecord);
monthlyRecordRouter.post("/add", addMonthlyRecord);

export default monthlyRecordRouter;
