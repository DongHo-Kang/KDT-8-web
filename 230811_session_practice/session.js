const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser"); // 추가
const PORT = 8000;

app.set("view engine", "ejs");

app.use(
  session({
    secret: "TstoryKey",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true })); // 추가

app.get("/", (req, res) => {
  if (req.session.username) {
    res.render("indexLoggedIn", { name: req.session.username });
  } else {
    res.render("indexLoggedOut");
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "Tstory" && password === "Tstory") {
    req.session.username = username;
  }
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    res.redirect("/");
  });
});

app.get("/signup", (req, res) => {
  res.send("Signup page");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
