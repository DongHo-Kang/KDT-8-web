const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views/multiplicationTables");

app.get("/", (req, res) => {
  res.render("multiplicationTables", { number: "4", number2: "6" });
});

app.listen(PORT, () => {
  console.log("http://localhost: PORT");
});
