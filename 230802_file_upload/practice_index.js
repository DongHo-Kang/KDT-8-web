const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + file.id + ext);
    },
  }),
});

app.get("/", (req, res) => {
  res.render("practice_index");
});

app.post("/upload", uploadDetail.single("profile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send(req.file);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
