const express = require("express");
const app = express();
const PORT = 8002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("practice_post");
  console.log(req.query);
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("practice_post_result", {
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
