const models = require("../models/index");

const { Op } = require("sequelize");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = (req, res) => {
  //model
  // User.post_signup(req.body, () => {
  //   res.send({ result: true });
  // });
  models.User2.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log(result);
    res.send({ result: true });
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signin = (req, res) => {
  //model
  // User.post_signin(req.body, (result) => {
  //   console.log(result);
  //   if (result.length > 0) {
  //     res.send({ result: true, data: result[0] }); //result배열에 있는 것 중 첫번째거를 가져온다.
  //   } else {
  //     res.send({ result: false, data: null });
  //   }
  // });
  models.User2.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("result", result);
    res.send({ result: true, data: result }); //result가 객체형태로 온다.
  });
};

exports.post_profile = (req, res) => {
  // console.log(req.body);
  // User.post_profile(req.body, (result) => {
  //   if (result.length > 0) {
  //     res.render("profile", { data: result[0] });
  //   } else {
  //     res.redirect("/user/signin"); //다시 이동시킨다.
  //   }
  // });
  models.User2.findOne({
    where: {
      userid: req.body.profile,
    },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};

exports.edit_profile = (req, res) => {
  // console.log(req.body);
  // User.edit_profile(req.body, () => {
  //   res.send({ result: true });
  // });

  const { userid, pw, name, id } = req.body;
  //구조분해 할당
  models.User2.updata(
    /*set*/ { userid, pw, name },
    /*where*/ {
      where: {
        id,
      },
    }
  ).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};

exports.delete_profile = (req, res) => {
  // User.delete_profile(req.body.id, () => {
  //   res.send({ result: true });
  // });
  models.User2.destory({ where: { id: req.body.id } }).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};

//findall  정리. => 무조건 배열이다.
exports.findall = (req, res) => {
  models.User2.findAll({
    //attributes: 원하는 컬럼 조회
    attributes: ["name", "userid"],
    //Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.ne(같지않은)
    //Op.or(또는), Op.in(배열 요소 중 하나), Op.notIn(배열요소와 모두다름)
    where: { id: { [Op.gte]: 4 } },
    //id값을 desc로 가져온다.
    order: [["id", "DESC"]],
    limit: 1,
    offset: 1,
  }).then((result) => {
    //console.log("result", result);
    res.send(result);
  });
};
