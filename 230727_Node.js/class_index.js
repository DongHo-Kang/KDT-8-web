// const mod = require("./class_module.js"); //외부 모듈 가져오기 require();
// console.log(mod);
// // console.log(mod.a);
// // console.log(mod.b);
// const {abc , c} = require("./class_module.js");
// //구조분해 할당
const http = require("http");
const fs = require("fs"); //파일 시스템 가져오기

const server = http.createServer((request, Response) => {
  //   Response.writeHead(200);
  //   Response.write("<h1>Hello World</h1>");
  //   Response.end("<p>End</p>");

  //파일 전송
  try {
    const data = fs.readFileSync("./class_index.html");
    Response.writeHead(200);
    Response.end(data);
  } catch (error) {
    console.log(errorr);
    Response.writeHead(404);
    Response.end(error.message);
  }
});

server.listen(8000 /*포트번호 지정*/, function () {
  console.log("localhost: 8000포트로 실행");
});
