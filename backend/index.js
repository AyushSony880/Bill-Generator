import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import productRouter from "./routes/product.route.js";
import schoolRouter from "./routes/school.route.js";
import monthlyRecordRouter from "./routes/monthlyRecord.route.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true,
  })
);
const PORT = process.env.PORT || 4000;

app.use("/product", productRouter);
app.use("/school", schoolRouter);
app.use("/monthlyRecord", monthlyRecordRouter);

app.listen(PORT, () => {
  console.log("post is listen on", PORT);
});
