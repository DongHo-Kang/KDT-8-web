const ws = require("ws"); //websocket 불러옴
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//웹소켓 서버 접속
const wss = new ws.Server({ server }); //서버 연결

//브라우저(클라이언트)들을 담을 변수 선언
const sockets = [];

wss.on("connection", (socket) => {
  //socket변수: 접속한 브라우저를 의미
  console.log("클라이언트가 연결되었습니다.");
  sockets.push(socket); //접속한 브라우저 socket을 sockets배열에 추가.

  //클라이언트에서 메시지 수신
  socket.on("message", (message) => {
    console.log(`클라이언트로부터 받은 메시지: ${message}`);
    //클라이언트로 응답 메시지 전송
    //socket.send(`서버에서 받은 메시지: ${message}`);
    sockets.forEach((elem) => {
      //실행된 모든 브라우저에 메시지를 보낸다.
      elem.send(`${message}`);
    });
  });
  //오류
  socket.on("error", (error) => {
    console.log("에러가 발생하였습니다.", error);
  });
  //접속 경로
  socket.on("close", () => {
    console.log("클라이언트와 연결이 종료되었습니다.");
  });
});
