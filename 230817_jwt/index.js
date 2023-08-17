const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "secretkey";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
  const { id } = req.body;
  const token = jwt.sign({ id: req.body.id }, SECRET);
  console.log(token);
  res.send({ result: true, id: req.body.id });
});

app.post("/verify", (req, res) => {
  console.log(req.headers);
  const auth = req.headers.authorization;
  const token = auth.split(" ");
  console.log(token);
  if (token[0] === "Bearer") {
    jwt.verify(token[1], SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .send({ result: false, message: "검증에 실패하였습니다." });
      }
      res.send({ result: true, user: decoded });
    });
  } else {
    res.send({ result: false, message: "올바른 인증방식이 아닙니다." });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
