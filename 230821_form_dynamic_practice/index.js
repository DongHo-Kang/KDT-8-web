const express = require("express");
const app = express();
const PORT = 8000;

const userInfo = { id: "kdt8", pw: "1234" };

//body-parser
app.use(express.json());
//view engine
app.set("view engine", "ejs");

//router
app.get("/", (req, res) => {
  res.render("index");
});
//post실습
app.get("/axiosPost", (req, res) => {
  res.render("post");
});
app.post("/resultPost", (req, res) => {
  console.log(req.body);
  if (userInfo.id === req.body.username) {
    if (userInfo.pw === req.body.password) {
      // // res.json: application/json 형태로 응답할때 사용
      // //json() 함수안에는 객체가 꼭 와야 함.
      // res.json({result: true, userInfo:{ id: userInfo.username, pw: userInfo.pw}})
      res.send(`${userInfo.id}님 환영합니다.`);
    } else {
      res.send("비밀번호가 틀립니다.");
    }
  } else {
    res.send("회원정보가 없습니다.");
  }
});

//server start
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
