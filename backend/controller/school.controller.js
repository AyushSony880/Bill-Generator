import { pool } from "../config/db.js";

const getSchool = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM school");
    res.json(rows);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error to get school data",
      Error: error,
    });
  }
};

export { getSchool };
