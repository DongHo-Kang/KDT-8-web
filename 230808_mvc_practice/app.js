const express = require("express");
const app = express();
const PORT = 8000;

//View 엔진
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//라우터
app.get("/", (req, res) => {
  res.render("index");
});

//라우터 분리
const router = require("./routes/user");
app.use("/user", router); //'/user로 처리하여 넘긴다.

//오류 처리
app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
