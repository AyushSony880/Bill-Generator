import { pool } from "../config/db.js";

const getMonthlyRecord = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM monthlyRecord");
    res.json(rows);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error to get monthlyRecord",
      Error: error,
    });
  }
};

export {getMonthlyRecord}