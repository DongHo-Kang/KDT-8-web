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

app.get("/chat", (req, res) => {
  res.render("chat");
});

//==========소켓=========//
//받아오는 갯수가 같아야 한다.
io.on("connection", (socket) => {
  console.log("id", socket.id);
  console.log("조인전", socket.rooms);
  //   socket.on("new_message", (arg, val1, val2, val3, val4, cb) => {
  //     console.log(arg, val1, val2, val3, val4);
  //     cb(arg, val1, val2, val3, val4);
  //     //hello, Server를 받아서 콘솔에 출력
  //     //다시 callback함수를 통해 클라이언트로 보낸다.
  //   });
  //=========채팅====//
  // socket.on("new_message", (arg, cb) => {
  //   console.log(arg);
  //   cb(arg);
  // });
  //=======채팅방====//
  socket.on("join", (chatroom) => {
    socket.join(chatroom);
    socket.room = chatroom; //socket은 객체 형태라서 socket.room에 지정.
    console.log("조인후", socket.rooms);
    //broadcast 포함시 나를 제외한 전체 사용자에게 메시지 전달
    socket.broadcast.to(chatroom).emit("userjoin", `사용자가 입장하셨습니다.`);
  });
  socket.on("message", (message) => {
    console.log(message);
    //io.to(특정방).emit(이벤트): 특정방의 전체 사용자에게 메시지 전달
    io.to(socket.room).emit("receive", message);
    socket.broadcast.to(socket.room).emit("send", message);
  });
});

//서버오픈
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
