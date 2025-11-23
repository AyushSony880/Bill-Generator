import { pool } from "../config/db.js";

const getProduct = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM product");
    res.json(rows);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error to get product data",
      Error: error,
    });
  }
};

const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("DELETE FROM product WHERE prod_id=(?)", [
      id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "No Item found with this id",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Item deleted successfully",
    });
  } catch (error) {
    console.log("DELETE ERROR ===>", error);

    return res.status(500).json({
      success: false,
      message: "Error to delete Item",
      error: error.message,
    });
  }
};
const addProduct = async (req, res) => {
  try {
    const { product_name, rate, unit, wps_1to5, wps_6to8 } = req.body;
    // res.send(school_id, year, month, stu_1to5, stu_6to8);

    if ((!product_name, !rate, !unit, !wps_1to5, !wps_6to8)) {
      return res.status(400).json({
        message: "Fill required field.",
      });
    }
    const pps_1to5 = (rate / 1000) * wps_1to5;
    const pps_6to8 = (rate / 1000) * wps_6to8;
    const [result] = await pool.query(
      "INSERT INTO product (product_name, rate, unit, wps_1to5, wps_6to8,pps_1to5,pps_6to8 ) VALUES (?,?,?,?,?,?,?)",
      [product_name, rate, unit, wps_1to5, wps_6to8, pps_1to5, pps_6to8]
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
        message: "Item already exist.",
      });
    }
    res.status(400).json({
      success: false,
      message: "Error to add item",
      Error: error.data.message || error.message,
    });
  }
};

export { getProduct, removeProduct, addProduct };
