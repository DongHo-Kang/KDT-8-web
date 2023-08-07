const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//라우터
app.get("/", (req, res) => {
  res.render("index");
});

//라우터 분리
const router = require("./routes"); //index는 생략 가능(./routes/index.js)
app.use("/visitor", router); // '/visitor'로 처리하여서 넘긴다. 어디로? ./routes/index.js 로.

//오류 처리
app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
