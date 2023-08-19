const models = require("../models/index");

const bcrypt = require("bcrypt");
const salt = 10;
let hash = "";

const jwt = require("jsonwebtoken");
const SECRET = "secretkey";

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = (req, res) => {
  const { userid, name, pw } = req.body;
  hash = bcryptPassword(pw);
  models.secureUser
    .create({
      userid,
      name,
      pw: hash,
    })
    .then((result) => {
      console.log(result);
      res.send({ result: true });
    });
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signin = async (req, res) => {
  const { userid, pw } = req.body;

  try {
    const user = await models.secureUser.findOne({
      where: {
        userid,
      },
    });
    console.log("user", user);
    if (user) {
      const compare = await comparePassword(pw, user.pw);
      console.log("hash", user.pw);
      console.log("pw", pw);
      console.log("compare result", compare);
      if (compare === true) {
        console.log("result true:", "successful");
        const token = jwt.sign({ id: userid }, SECRET); //jwt 생성
        console.log("token", token);
        res.send({ result: true, data: { user, token } }); //result가 객체형태로 온다.
      } else {
        console.log("result false:", "password wrong");
        res.send({ result: false, message: "wrong" });
      }
    } else {
      console.log("result no User:", "No User");
      res.send({ result: false, message: "No User" });
    }
  } catch (error) {
    console.error(error);
    res.send({ result: false });
  }
};

exports.profile = (req, res) => {
  res.render("profile");
};

exports.post_profile = (req, res) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization.split(" ");
  console.log("Token", token);
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" "); //분해
    try {
      const result = jwt.verify(token[1], SECRET);
      console.log(result);
      models.secureUser
        .findOne({
          where: {
            userid: result.id,
          },
        })
        .then((result) => {
          console.log("result", result);
          res.json({ result: true, data: result });
        });
    } catch (error) {
      console.log(error);
      res.json({ result: false, message: "인증된 회원이 아닙니다." });
    }
  } else {
    res.redirect("/user/signin");
  }
};
//암호화
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

//비교
const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
