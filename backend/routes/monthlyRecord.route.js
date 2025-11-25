import express from "express";
import {
  addMonthlyRecord,
  editMonthlyRecord,
  getMonthlyRecord,
} from "../controller/monthlyRecord.controller.js";

const monthlyRecordRouter = express.Router();

monthlyRecordRouter.get("/get", getMonthlyRecord);
monthlyRecordRouter.post("/add", addMonthlyRecord);
monthlyRecordRouter.put("/edit", editMonthlyRecord);

export default monthlyRecordRouter;
