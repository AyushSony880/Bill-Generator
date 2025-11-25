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
    const { school_name, address } = req.body;
    if (!school_name || !address) {
      return res.status(400).json({
        message: "Fill required field.",
      });
    }
    const [result] = await pool.query(
      "INSERT INTO school (school_name, address) VALUES (?, ?)",
      [school_name, address]
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
      Error: error.data.message || error.message,
    });
  }
};

const removeSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query(
      "DELETE FROM schooL WHERE school_id=(?)",
      [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "No school found with this id",
      });
    }

    return res.status(200).json({
      success: true,
      message: "School deleted successfully",
    });
  } catch (error) {
    console.log("DELETE ERROR ===>", error);

    return res.status(500).json({
      success: false,
      message: "Error to delete school",
      error: error.message,
    });
  }
};

const editSchool = async (req, res) => {
  try {
    const { school_id, address } = req.body;

    if (!address || !school_id) {
      return res.status(400).json({
        message: "Fill required field.",
      });
    }
    const [result] = await pool.query(
      "UPDATE school SET address= ? WHERE school_id = ?",
      [address, school_id]
    );
    return res.json({
      success: true,
      message: " School updated successfully...",
      id: result.insertId,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error to update school",
      Error: error.message,
    });
  }
};
export { getSchool, addSchool, removeSchool ,editSchool};
