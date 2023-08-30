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

function getUsersInRoom(room) {
  const users = [];
  console.log(io.sockets);
  const clients = io.sockets.adapter.rooms.get(room);
  if (clients) {
    clients.forEach((socketId) => {
      const userSocket = io.sockets.sockets.get(socketId);
      users.push(userSocket);
    });
  }
  return users;
}
const roomList = [];

//==========소켓=========//
//받아오는 갯수가 같아야 한다.
io.on("connection", (socket) => {
  console.log("id", socket.id);
  console.log("조인전", socket.rooms);
  socket.on("join", (chatroom, username) => {
    socket.join(chatroom);
    socket.room = chatroom; //socket은 객체 형태라서 socket.room에 지정.
    socket.name = username;
    console.log("조인후", socket.rooms);
    //broadcast 포함시 나를 제외한 전체 사용자에게 메시지 전달
    socket.broadcast
      .to(chatroom)
      .emit("userjoin", `${socket.name}가 입장하셨습니다.`);
    //채팅방 목록 갱신
    if (!roomList.includes(chatroom)) {
      roomList.push(chatroom);
      io.emit("roomList", roomList);
    }
    const usersInRoom = getUsersInRoom(chatroom);
    io.to(chatroom).emit("userList", usersInRoom);
    cb();
  });
  socket.on("message", (message) => {
    console.log(message);
    //io.to(특정방).emit(이벤트): 특정방의 전체 사용자에게 메시지 전달
    io.to(socket.room).emit("send", message);
    //나를 제외한 모든 방에 메시지 보내기.
    // socket.broadcast.to(socket.room).emit("receive", message);
  });
});

//서버오픈
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
