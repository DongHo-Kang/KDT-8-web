//import express from "express";
const express = require("express");

const app = express();
const PORT = 8000; //관례상 상수가 들어가는 변수는 대문자로

//뷰엔진
app.set("view engine", "ejs"); //ejs로 뷰엔진 세팅
app.set("views", "./views"); //views에 파일 지정(./views)

// 정적인 파일 불러오기
// app.use("public", express.static( "/public")); //앞에 /public 도메인 주소 , 뒤에 /public은 public에 있는 파일들 있는 위치
app.get("/", (request, response) => {
  //render() 뷰 엔진 렌더링
  response.render("test"); //./views/test.ejs를 찾아서 렌더링 함.
  response.render("test", { data: "kang" });
});

//서버를 열어주는 역할
app.listen(PORT, () => {
  console.log("http://localhost:${PORT}"); //브라우저에서 뜨지 않고 터미널에 뜬다.
});
