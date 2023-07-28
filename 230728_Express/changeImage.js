const express = require("express");

const app = express();
const PORT = 8002;

app.set("view engine", "ejs");
app.set("views", "./views/changeImage");

app.use(express.static("views/changeImage"));

app.get("/", (req, res) => {
  res.render("changeImage");
});

app.listen(PORT, () => {
  console.log("http://localhost:${PORT}");
});
