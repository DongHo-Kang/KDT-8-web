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
  socket.on("hello", (hello, cb) => {
    console.log(`client: ${hello.eng}`);
    cb(hello);
  });
  socket.on("study", (study, cb) => {
    console.log(`client: ${study.eng}`);
    cb(study);
  });
  socket.on("bye", (bye, cb) => {
    console.log(`client: ${bye.eng}`);
    cb(bye);
  });
});

//서버오픈
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
