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
    const [result] = await pool.query(
      "DELETE FROM product WHERE prod_id=(?)",
      [id]
    );
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

export { getProduct,removeProduct };
