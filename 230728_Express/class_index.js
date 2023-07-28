//const express = require("express"); //express 모듈 가져오기

//최신 문법 ES2015에서
import express from "express";

const app = express();
const PORT = 8000; //관례상 상수가 들어가는 변수는 대문자로

app.get("/", (request, response) => {
  // "/"은 도메인으로 사이트주소로 뒤에 붙는다. localhost:8000/
  //콜백함수 순서 (요청, 응답)
  //send() 클라이언트에 응답 데이터를 보낼때
  //response.send("Hello Express");
  response.send({
    result: true,
    code: 1000,
    message: "안녕하세요.",
    data: { nam: "kang" },
  }); //객체 형식으로도 가능
});

//서버를 열어주는 역할
app.listen(PORT, () => {
  console.log("http://localhost:${PORT}"); //브라우저에서 뜨지 않고 터미널에 뜬다.
});
