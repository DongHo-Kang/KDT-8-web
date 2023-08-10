const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models/index");

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

db.sequelize.sync({ force: false }).then(() => {
  //force: false => 테이블이 없으면 생성
  //force: true => 테이블 무조건 생성(만약 DB가 있다면 다 삭제하고 다시 생성)
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
