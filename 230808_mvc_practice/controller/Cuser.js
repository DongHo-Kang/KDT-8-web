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
  console.log("postSingin", req.body);
  User.postSignIn(req.body, (result) => {
    if (result.length > 0) {
      res.send({
        result: true,
        data: result[0],
        message: `${result[0].name}님, 환영합니다.`,
      });
      console.log("회원가입 정보: ", result);
    } else {
      res.send({ result: false, data: null, message: "로그인 실패" });
    }
  });
};

exports.getProfile = (req, res) => {
  const userId = req.params.id;
  User.getProfile(req, (userProfile) => {
    if (userProfile !== null) {
      res.render("profile", { userId, profileData: userProfile });
      console.log({ userId, profileData: userProfile });
    } else {
      res.render("profile", { userId, profileData: null });
    }
  });
};

exports.postUpdate = (req, res) => {
  console.log("Controller", req.body);
  User.postUpdate(req.body, (result) => {
    console.log("회원정보 업데이트: ", req.body);
    res.send({ result: result, msg: "회원정보 업데이트 완료" });
  });
};

exports.postDelete = (req, res) => {
  console.log("delete", req.body);
  User.postDelete(req.body, (result) => {
    console.log("회원 탈퇴:", req.body);
    res.send({ result: result, msg: "회원 탈퇴" });
  });
};
