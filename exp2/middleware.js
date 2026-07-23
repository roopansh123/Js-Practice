import express from "express";

import { Temporal } from "@js-temporal/polyfill";

const PORT = 3000;
const app = express();

app.use((req, res, next) => {
  console.log("--------------------------");
  next();
});

function printTime(req, res, next) {
  const exactMoment = Temporal.Now.plainDateISO();
  console.log(exactMoment.toString());
  next();
}

app.get("/", printTime, (req, res) => {
  res.send("<h1>welcome</h1>");
});

app.listen(PORT, () => {
  console.log("server is live");
});
