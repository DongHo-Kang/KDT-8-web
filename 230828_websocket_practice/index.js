const ws = require("ws"); //websocket 불러옴..
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
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

  //접속한 브라우저 socket을 sockets배열에 추가.
  sockets.push(socket);

  //클라이언트에서 메시지 수신
  socket.on("message", (message) => {
    console.log(`클라이언트로부터 받은 메시지: ${message} `);

    //클라이언트로 응답 메시지 전송
    sockets.forEach((elem) => {
      //실행된 모든 브라우저에 메시지를 보낸다.
      elem.send(`${message}`);
    });
  });

  //오류 처리
  socket.on("error", (error) => {
    console.error("오류가 발생했습니다.", error);
  });

  //접속 종료
  socket.on("close", () => {
    console.log("클라이언트와 연결이 종료되었습니다.");
  });
});
