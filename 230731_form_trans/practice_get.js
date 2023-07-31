const express = require("express");
const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("practice_get");
  console.log(req.query);
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("practice_get_result", {
    userInfo: req.query,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
