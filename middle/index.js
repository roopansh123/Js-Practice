import express from "express";

import product from "./productRoutes.js";

const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  let path = req.path;
  console.log(path);
  next();
});

function errorHandler(error, req, res, next) {
  console.log(error.message);

  res.status(500).json({
    success: false,
    message: error.message || "Internal Error",
  });
}

app.get("/error", (req, res, next) => {
  const error = new Error("something is wrong");
  error.status = 400;
  next(error);
});

app.use("/product", product);

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/about", (req, res) => {
  res.send("this is about section");
});

app.listen(PORT, () => {
  console.log("server is live ");
});

app.use(errorHandler);
