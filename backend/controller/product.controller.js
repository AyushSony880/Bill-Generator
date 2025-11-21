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

export { getProduct };
