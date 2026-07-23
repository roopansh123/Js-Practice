const express = require("express");

const app = express();

// app.listen();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.body);

  res.send(`<h1> roopansh </h1>`);
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log("The server is live");
});
