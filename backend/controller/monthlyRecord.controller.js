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
      [stu_1to5, stu_6to8,id]
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

export { getMonthlyRecord, addMonthlyRecord,editMonthlyRecord };
