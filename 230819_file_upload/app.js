const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");

const multer = require("multer");
const upload = multer({
  dest: "uploads/",
});

//multer 세부 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file, originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//body - parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

//싱글 파일 업로드
app.post("/upload", upload.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("upload!");
});

app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send(uplpad);
});

app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfiles1" }, { name: "userfiles2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send(uplpad);
  }
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
