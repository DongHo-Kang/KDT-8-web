const express = require("express");
const app = express();
const PORT = 8000;

//미들웨어 처리방법 (정석처럼 사용)
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router - 주소를 구분해두는 것
app.get("/", (req, res) => {
  //res.send("Hello");
  res.render("index", { title: "폼 실습" });
});

app.post("/", (req, res) => {
  console.log(req.body); //request-body 방식으로 값을 받아온다.
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result", {
    title: "GET요청 폼 결과 확인하기",
    userInfo: req.query, //userInfo: {id:"", pw:""}
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", {
    title: "POST요청 폼 결과 확인하기",
    userInfo: req.body, //userInfo: {id:"", pw:""}
  });
});

// app.put("/", (req, res) => {
//   console.log(req.body);
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
