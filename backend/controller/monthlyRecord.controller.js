import { pool } from "../config/db.js";
import puppeteer from "puppeteer";
import { buildInvoiceHtml } from "./invoice.controller.js";

const getMonthlyRecord = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT mr.id,mr.school_id, s.school_name AS school,mr.year,mr.month,mr.stu_1to5,mr.stu_6to8 FROM monthlyRecord mr INNER JOIN school s ON mr.school_id = s.school_id;"
    );
    res.json(rows);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error to get monthlyRecord",
      Error: error,
    });
  }
};

const addMonthlyRecord = async (req, res) => {
  try {
    const { school_id, year, month, stu_1to5, stu_6to8 } = req.body;
    // res.send(school_id, year, month, stu_1to5, stu_6to8);

    if ((!school_id, !year, !month, !stu_1to5, !stu_6to8)) {
      return res.status(400).json({
        message: "Fill required field.",
      });
    }
    const [result] = await pool.query(
      "INSERT INTO monthlyRecord (school_id, year, month, stu_1to5, stu_6to8) VALUES (?, ?,?,?,?)",
      [school_id, year, month, stu_1to5, stu_6to8]
    );
    return res.json({
      success: true,
      message: " Data Saved",
      id: result.insertId,
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        success: false,
        message: "record already exist.",
      });
    }
    res.status(400).json({
      success: false,
      message: "Error to add addMonthly Record ",
      Error: error.data.message || error.message,
    });
  }
};

const editMonthlyRecord = async (req, res) => {
  try {
    const { id, stu_1to5, stu_6to8 } = req.body;

    if (!id || !stu_1to5 || !stu_6to8) {
      return res.status(400).json({
        message: "Fill required field.",
      });
    }
    const [result] = await pool.query(
      "UPDATE monthlyRecord SET stu_1to5= ?,stu_6to8=? WHERE id = ?",
      [stu_1to5, stu_6to8, id]
    );
    return res.json({
      success: true,
      message: " Monthly record updated successfully...",
      id: result.insertId,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error to update monthly record",
      Error: error.message,
    });
  }
};

const getBillRecordFromDb = async ({ id, month, year }) => {
  const billRecord = {
    id: "",
    school_id: "",
    school: "",
    month: "",
    year: "",
    stu_1to5: "",
    stu_6to8: "",
    items: [],
    grand_total: 0,
  };

  const [rows1] = await pool.query(
    `SELECT 
       mr.id,
       mr.school_id, 
       s.school_name AS school,
       mr.year,
       mr.month,
       mr.stu_1to5,
       mr.stu_6to8
     FROM monthlyRecord mr 
     INNER JOIN school s ON mr.school_id = s.school_id 
     WHERE mr.month = ? AND mr.year = ? AND mr.school_id = ?`,
    [month, year, id]
  );

  if (rows1.length === 0) {
    return null;
  }

  const monthly = rows1[0];

  billRecord.id = monthly.id;
  billRecord.school_id = +id;
  billRecord.school = monthly.school;
  billRecord.month = monthly.month;
  billRecord.year = monthly.year;
  billRecord.stu_1to5 = monthly.stu_1to5;
  billRecord.stu_6to8 = monthly.stu_6to8;

  const [rows2] = await pool.query("SELECT * FROM product");

  for (let i = 0; i < rows2.length; i++) {
    const product = rows2[i];

    const total_weight_1to5 = (product.wps_1to5 / 1000) * monthly.stu_1to5;
    const total_weight_6to8 = (product.wps_6to8 / 1000) * monthly.stu_6to8;
    const total_weight = total_weight_1to5 + total_weight_6to8;
    const total_cost = total_weight * product.rate;

    const billItem = {
      product_name: product.product_name,
      unit: product.unit,
      rate: product.rate,
      total_weight_1to5: total_weight_1to5.toFixed(2),
      total_weight_6to8: total_weight_6to8.toFixed(2),
      total_weight: total_weight.toFixed(2),
      total_cost: total_cost.toFixed(2),
    };

    billRecord.items.push(billItem);
    billRecord.grand_total += total_cost;
  }

  billRecord.grand_total = Number(billRecord.grand_total.toFixed(2));

  return billRecord;
};

const previewMonthlyRecord = async (req, res) => {
  try {
    const { id, month, year } = req.params;

    if (!id || !month || !year) {
      return res.status(400).json({
        success: false,
        message: "id, month, year are required",
      });
    }

    const billRecord = await getBillRecordFromDb({ id, month, year });

    if (!billRecord) {
      return res.status(404).json({
        success: false,
        message: "No monthly record found for given month, year and school",
      });
    }

    return res.json(billRecord);
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: "Error to get monthlyRecord",
      error,
    });
  }
};

const previewMonthlyRecordPdf = async (req, res) => {
  try {
    const { id, month, year } = req.params; // route: /preview/:id/:month/:year/pdf

    if (!id || !month || !year) {
      return res.status(400).json({
        success: false,
        message: "id, month, year are required",
      });
    }

    const billRecord = await getBillRecordFromDb({ id, month, year });

    if (!billRecord) {
      return res.status(404).json({
        success: false,
        message: "No monthly record found for given month, year and school",
      });
    }

    const html = buildInvoiceHtml(billRecord);

    const browser = await puppeteer.launch({
      headless: "new",
    });
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "5mm", bottom: "5mm", left: "5mm", right: "5mm" },
    });

    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=invoice_${billRecord.id}.pdf`
    );
    return res.send(pdfBuffer);
  } catch (error) {
    console.error("previewMonthlyRecordPdf error:", error);
    return res.status(500).json({
      success: false,
      message: "Error generating PDF",
      error,
    });
  }
};

export {
  getMonthlyRecord,
  addMonthlyRecord,
  editMonthlyRecord,
  previewMonthlyRecord,
  previewMonthlyRecordPdf,
};
