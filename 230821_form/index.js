const express = require("express"); //express 모듈 가져오기
const app = express(); //express 가져오기
const PORT = 8000; //8000번 포트 열어주기

//view engine
app.set("view engine", "ejs");

//views라는 설정을 다른 폴더로 바꿀때 쓰는 옵션
//views라는 폴더를 기본으로 사용할때는 입력 안해도 됨.
app.set("views", "./views");

//body-parser
//req.body => post 전송일 때 사용
app.use(express.urlencoded({ extended: true }));
//extended: 중첩된 객체표현을 허용할지 말지 결정
//application/x-www-form-urlencoded

//application/json 타입 사용
app.use(express.json());

//router

app.get("/getForm", (req, res) => {
  //get방식은 request에 query형태로 접근
  const { id, pw } = req.query; //req.query 구조 분해 할당.
  res.render("result", {
    title: "GET요청 결과 확인",
    userInfo: { id: id, pw }, //key와 value의 변수가 동일해서 value(pw)생략 가능
  });
  //result 페이지 데이터{} 전송
  //key-value 형태에서 key값과 value의 변수가 동일 할때는 value 생략 가능.
});

app.post("/postForm", (req, res) => {
  //post방식은 request(req)에 body 형태로 접근
  //req.body를 구조분해할당 req.body.id, req.body.pw
  const { id, pw } = req.body;

  //result페이지에 데이터 전송
  res.render("result", { title: "POST요청 결과 확인", userInfo: { id, pw } });
});

//페이지를 지정할 때는 미들웨어 use를 사용
//단점, http전송 방식(Get,Post)를 이해하지 못해서 그냥 위에서 부터 순차적으로 읽어드림.
//같은 url로 get, post를 만들 수 있지만, use로는 접근이 어렵다.
//예를 들어,get방식의 '/login'과 post방식의 '/login'은 다른 페이지이지만 use는 동일한 페이지로 인식한다.
//use는 404페이지일 때 사용한다.
app.get("/", (req, res) => {
  //render: 페이지를 렌더링 render('페이지이름', 데이터)
  res.render("index");
});

app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
