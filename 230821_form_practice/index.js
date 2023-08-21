const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
//view engine
app.set("view engine", "ejs");

//router
app.get("/", (req, res) => {
  res.render("index");
});
//get으로 정보 받기
app.get("/getPage", (req, res) => {
  res.render("get");
});
app.get("/resultGet", (req, res) => {
  console.log("get", req.query);
  //구조분해 할당하기
  const { username, gender, birthYear, birthMonth, birthDay, hobby } =
    req.query;
  res.render("result", {
    title: "get방식",
    userInfo: { username, gender, birthYear, birthMonth, birthDay, hobby },
  });
});
//post로 정보 받기
app.get("/postPage", (req, res) => {
  res.render("post");
});
app.post("/resultPost", (req, res) => {
  console.log("post", req.body);
  const {
    username,
    gender,
    birthYear,
    birthMonth,
    birthDay,
    hobby,
    color,
    number,
  } = req.body;
  res.render("result", {
    title: "Post방식",
    userInfo: {
      username,
      gender,
      birthYear,
      birthMonth,
      birthDay,
      hobby,
      color,
      number,
    },
  });
});

//서버오픈
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
