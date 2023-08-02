const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

//view enigine
app.set("view engine", "ejs");
app.set("views", "./views");

//정적 파일 설정
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("practice_index");
});

app.post("/signUp", (req, res) => {
  console.log("back", req.body);
  console.log("id", req.body.id);
  res.send(req.body);
  const id = req.body.id;
  //파일 접근 및 경로 세팅
  const uploadDetail = multer({
    storage: multer.diskStorage({
      destination(req, file, done) {
        done(null, "uploads/");
      },
      filename(req, file, done) {
        const ext = path.extname(file.originalname);
        const filename = `${path.basename(file.originalname, ext)}_${
          req.body.id
        }${ext}`;
        done(null, filename);
      },
    }),
  });

  app.post("/signUpFile", uploadDetail.single("profile"), (req, res) => {
    console.log(req.file);
    const responseObj = {
      data: req.body,
      file: req.file,
    };
    res.send(responseObj);
  });
});

// //파일 접근 및 경로 세팅
// const uploadDetail = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "uploads/");
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       const filename = `${path.basename(file.originalname, ext)}_${req.body.id}${ext}`;
//       done(null, filename);
//     },
//   }),
// });

// app.post("/signUpFile", uploadDetail.single("profile"), (req, res) => {
//   console.log(req.file);
//   const responseObj = {
//     file: req.file,
//   };
//   res.send(responseObj);
// });

//server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
