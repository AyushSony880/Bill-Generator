import express from "express";
import {
  addMonthlyRecord,
  editMonthlyRecord,
  getMonthlyRecord,
  previewMonthlyRecord,
  previewMonthlyRecordPdf,
} from "../controller/monthlyRecord.controller.js";

const monthlyRecordRouter = express.Router();

monthlyRecordRouter.get("/get", getMonthlyRecord);
monthlyRecordRouter.get("/preview/:id/:month/:year", previewMonthlyRecord);
monthlyRecordRouter.get("/preview/:id/:month/:year/pdf", previewMonthlyRecordPdf);
monthlyRecordRouter.post("/add", addMonthlyRecord);
monthlyRecordRouter.put("/edit", editMonthlyRecord);

export default monthlyRecordRouter;
