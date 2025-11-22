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

const addSchool = async (req, res) => {
  try {
    const { schoolName, address } = req.body;
    if (!schoolName || !address) {
      return res.json({
        message: "Fill required field.",
      });
    }
    const [result] = await pool.query(
      "INSERT INTO school (school_name, address) VALUES (?, ?)",
      [schoolName, address]
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
        message: "School name already exists",
      });
    }
    res.status(400).json({
      success: false,
      message: "Error to add school data",
      Error: error,
    });
  }
};
export { getSchool, addSchool };
