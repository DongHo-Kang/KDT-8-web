const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

//multer 세팅
const uploadDetail = multer({
  Storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      console.log("filename: ", req.body);
      const ext = path.extname(file.originalname);
      done(null, req.body.userId + Date.now() + ext);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 5 },
});

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json);

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//정적파일 세팅
app.use("/uploads", express.static(__dirname + "/uploads"));

//router
app.get("/", (req, res) => {
  res.render("class_index");
});

app.post("/result", uploadDetail.single("profile"), (req, res) => {
  console.log(req.file);
  res.render("result", {
    userInfo: req.body,
    profile: req.file.path,
  });
});

//server
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//server 밑으로는 코드가 읽히지 않는다. 코드의 순서도 중요하다.
