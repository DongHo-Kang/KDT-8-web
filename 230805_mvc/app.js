const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.set("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes"); //index는 생략 가능
app.use("/", indexRouter); //localhost:PORT/경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동장

// app.get("/", (req, res) => {
//   res.render("index");
// });

//404=> 맨 마지막 라우트로 선언해야 함.
app.get("*", (req, res) => {
  res.render("404");
}); // *:그 외 나머지 주소는 모두(all) 잘못된 요청임을 사용자에게 알림.

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
