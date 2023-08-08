const User = require("../model/User");

exports.getSignUp = (req, res) => {
  res.render("signup");
};

exports.postSignUp = (req, res) => {
  console.log(req.body);
  User.postSignUp(req.body, (result) => {
    console.log("회원가입 정보: ", req.body);
    res.send({ result: result, msg: "회원가입 완료" });
  });
};

exports.getSignIn = (req, res) => {
  res.render("signin");
};

exports.postSignIn = (req, res) => {
  console.log(req.body);
  User.postSignIn(req.body, (result) => {
    if (result === 1) {
      res.send({ result: result, message: `'${result.name}'님, 환영합니다.` });
      console.log("회원가입 정보: ", req.body);
    } else {
      res.send({ result: result, message: "로그인 실패" });
    }
  });
};
