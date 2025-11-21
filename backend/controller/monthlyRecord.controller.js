import { pool } from "../config/db.js";

const getMonthlyRecord = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT s.school_name AS school,mr.year,mr.month,mr.stu_1to5,mr.stu_6to8 FROM monthlyRecord mr INNER JOIN school s ON mr.school_id = s.school_id;"
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

export { getMonthlyRecord };
