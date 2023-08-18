const models = require("../models/index");

const bcrypt = require("bcrypt");
const salt = 10;
let hash = "";

const { Op } = require("sequelize");

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
        res.send({ result: true, data: user }); //result가 객체형태로 온다.
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

exports.post_profile = (req, res) => {
  models.secureUser
    .findOne({
      where: {
        userid: req.body.profile,
      },
    })
    .then((result) => {
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

//암호화
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

//비교
const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
