const model = require("../model/Model");

//========================================//

//GET
const main = (req, res) => {
  res.render("index");
};
//회원가입 페이지
const signup = (req, res) => {
  res.render("signup");
};
//로그인 페이지
const signin = (req, res) => {
  res.render("signin");
};

const detail = (req, res) => {
  res.render("detail");
};

//================================================//
//POST
//회원가입
const post_signup = (req, res) => {
  model.db_signup(req.body, () => {
    res.json({ result: true });
  });
};

const post_signin = (req, res) => {
  model.db_signin(req.body, (rows) => {
    if (rows.length > 0) {
      res.json({ result: true, data: rows[0] });
    } else {
      res.json({ result: false });
    }
  });
};

const post_detail = (req, res) => {
  model.db_detail(req.body, (rows) => {
    if (rows.length > 0) {
      res.json({ result: true, data: rows[0] });
    } else {
      res.json({ result: false });
    }
  });
};

const updata = (req, res) => {
  model.db_updata(req.body, () => {
    res.json({ result: true });
  });
};

//res.render : 뷰페이지를 랜더링 render(뷰페이지이름, 데이터(선택)) 뷰=> node.js가 제공하는 템플릿
//res.send : 모든타입(문자열, 배열, 객체, 숫자 등) 데이터 전송
//res.json : 객체타입(json) 데이터 전송
//res.redirect: 페이지를 이동

module.exports = {
  main,
  signup,
  signin,
  post_signup,
  post_signin,
  detail,
  updata,
  post_detail,
};
