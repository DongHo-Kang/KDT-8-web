const User = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = (req, res) => {
  //model
  User.post_signup(req.body, () => {
    res.send({ result: true });
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signin = (req, res) => {
  //model
  User.post_signin(req.body, (result) => {
    console.log(result);
    if (result.length > 0) {
      res.send({ result: true, data: result[0] }); //result배열에 있는 것 중 첫번째거를 가져온다.
    } else {
      res.send({ result: false, data: null });
    }
  });
};

exports.post_profile = (req, res) => {
  console.log(req.body);
  User.post_profile(req.body, (result) => {
    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    } else {
      res.redirect("/user/signin"); //다시 이동시킨다.
    }
  });
};

exports.edit_profile = (req, res) => {
  console.log(req.body);
  User.edit_profile(req.body, () => {
    res.send({ result: true });
  });
};

exports.delete_profile = (req, res) => {
  User.delete_profile(req.body.id, () => {
    res.send({ result: true });
  });
};
