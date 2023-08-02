const express = require("express");
const multer = require("multer");
//경로 가져오는 모듈
const path = require("path");
const app = express();
const PORT = 8000;

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//정적파일 설정
app.use("/uploads", express.static(__dirname + "/uploads"));

//multer Setting
const upload = multer({
  //dest: 업로드한 파일을 저장할 경로 지정
  dest: "uploads/", //폴더가 자동으로 생성된다.
});

const uploadDetail = multer({
  //storage: 저장할 공간에 대한 정보
  //diskstorage: 파일을 디스크에 저장하기 위한 모든 제어 기능 제공
  storage: multer.diskStorage({
    //destination : 파일 저장 경로 지정
    destination(req, file, done) {
      done(null, "uploads/"); //폴더가 자동생성이 안되서 미리 폴더를 만들어 두어야 한다.
    },
    //filename: 파일 이름 설정
    filename(req, file, done) {
      const ext = path.extname(file.originalname); //파일 경로에 확장자가를 가져옴
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); //ext(확장자), basename(원래 이름 originalname, 에서 ext를 떼라)
    },
  }),
  limits: { fileSize: 1024 * 1024 * 5 }, //5메가로 용량 지정
});

app.get("/", (req, res) => {
  res.render("index");
});

//싱글
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
});

//멀티 버전1
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
});

//멀티 버전2
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
  }
);

//동적
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  }
);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
