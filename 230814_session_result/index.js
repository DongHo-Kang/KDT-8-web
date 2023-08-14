const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    name: "mySession",
  })
);

const userInfo = { id: "kdt8", pw: "1234" };

app.get("/", (req, res) => {
  const user = req.session.user;
  console.log(user);
  if (user === undefined) {
    res.render("index", { isLogin: false });
  } else {
    res.render("index", { isLogin: true, user: user });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    req.session.user = req.body.id;
    res.redirect("/");
  } else {
    res.send(
      `<script>alert('로그인 실패'); document.location.href='/';</script>`
    );
  }
});

app.get("/logout", (req, res) => {
  const user = req.session.user;

  if (user === undefined) {
    res.send(
      `<script>alert('잘못된 접근입니다');document.location.href='/';</script>`
    );
  } else {
    req.session.destroy(() => {
      //   res.clearCookie("connect.sid");
      res.redirect("/");
    });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
