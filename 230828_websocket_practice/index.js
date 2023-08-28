const ws = require("ws"); //websocket 불러옴..
const PORT = 8000;

//웹소켓 서버 접속
const wss = new ws.Server({ port: PORT }); //서버 연결

wss.on("connection", (socket) => {
  //socket변수: 접속한 브라우저를 의미
  console.log("클라이언트가 연결되었습니다.");

  //클라이언트에서 메시지 수신
  socket.on("message", (message) => {
    console.log(`클라이언트로부터 받은 메시지: ${message} `);

    //클라이언트로 응답 메시지 전송
    socket.send(`서버에서 받은 받은 메시지: ${message}`);
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
