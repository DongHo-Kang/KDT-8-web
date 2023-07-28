const express = require("express"); //express 모듈 가져오기

const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.set("views", "./views/larva"); //첫번재 views는 이름 지정, 두번째 ./views는 불러올 경로 지정

app.use(express.static("views/larva")); //정적 파일을 처리하기 위해 views 디렉터리를 express에 등록 이미지와 css는 정적 파일임으로.

app.get("/", (req, res) => {
  res.render("larva");
});

app.listen(PORT, () => {
  console.log("http://localhost:${PORT}");
});
