const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const app = express();
const PORT = 8000;

//http서버
const server = http.createServer(app);
//socket서버
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

//==========소켓=========//
//받아오는 갯수가 같아야 한다.
io.on("connection", (socket) => {
  //   socket.on("new_message", (arg, val1, val2, val3, val4, cb) => {
  //     console.log(arg, val1, val2, val3, val4);
  //     cb(arg, val1, val2, val3, val4);
  //     //hello, Server를 받아서 콘솔에 출력
  //     //다시 callback함수를 통해 클라이언트로 보낸다.
  //   });
  //=========채팅====//
  socket.on("new_message", (arg, cb) => {
    console.log(arg);
    cb(arg);
  });
});

//서버오픈
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
