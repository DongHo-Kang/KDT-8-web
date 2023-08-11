const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = 8000;

app.set("view engine", "ejs");

app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/warning", (req, res) => {
  res.render("warning");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
