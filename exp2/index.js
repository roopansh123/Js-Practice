const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/roopansh", (req, res) => {
  //   console.log(req.body);
  res.send("hello roopansh");
});

app.listen(PORT, () => {
  console.log("server is live");
});
