const express = require("express");

const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("views/changeImage"));
app.use(express.static("views/larva"));

app.get("/", (req, res) => {
  res.render("app");
});

app.get("/changeImage", (req, res) => {
  res.render("./changeImage/changeImage");
});

app.get("/larva", (req, res) => {
  res.render("./larva/larva");
});

app.get("/multiplicationTables", (req, res) => {
  res.render("./multiplicationTables/multiplicationTables", {
    number: "4",
    number2: "6",
  });
});

app.listen(PORT, () => {
  console.log("http://localhost: ${PORT}");
});
