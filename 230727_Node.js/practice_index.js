// //외부 모듈 가져오기 require();
// const mod = require("./practice_module");
// console.log(mod);

// const mo = require("./practice_module");
// console.log(mo);

const http = require("http");
const fs = require("fs"); //파일 시스템 가져오기

const server = http.createServer((request, response) => {
  //   response.writeHead(200); //응답 헤더 작성
  //   response.write("<h1>Hello.</h1>"); //응답 본문 작성
  //   response.end("<p>bye</p>"); //응답 본문 작성 후 응답 종료

  //파일 전송
  try {
    const data = fs.readFileSync("./practice_index.html");
    response.writeHead(200);
    response.end(data);
  } catch (error) {
    console.log(error);
    response.writeHead(404);
    response.end(error.message);
  }
});

server.listen(8000, function () {
  console.log("localhost: 8000포트 실행");
}); //listen(port, callback)
