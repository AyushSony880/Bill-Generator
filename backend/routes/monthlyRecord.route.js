import express from 'express'
import { getMonthlyRecord } from '../controller/monthlyRecord.controller.js'

const monthlyRecordRouter= express.Router()

monthlyRecordRouter.get("/get", getMonthlyRecord)

export default monthlyRecordRouter