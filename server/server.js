const dotenv = require("dotenv");
const express = require("express");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const productRouter = require("./routes/productRoutes");
const cors = require("cors");

const morgan = require("morgan");

const app = express();

const logger = function (req, res, next) {
  console.log("Custom Middleware called ");
  console.log(req.method, req.url);
  next();
};

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());

app.use(logger);

app.use((req, res, next) => {
  req.requestAt = new Date().toISOString();
  next();
});

app.use("/api/products", productRouter);

mongoose
  .connect(process.env.CONT_STR)
  .then((conn) => {
    // console.log(conn);
    console.log("DB connected successfully");
  })
  .catch((err) => console.error("DB connection error:", err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
