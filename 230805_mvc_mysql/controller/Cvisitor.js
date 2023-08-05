const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

//mysql 연결 전
// exports.getVisitors = (req, res) => {
//   console.log(Visitor.getVisitors());
//   res.render("visitor", { data: Visitor.getVisitors() });
// };

//mysql 연결 후
//1.조회부분
exports.getVisitors = (req, res) => {
  Visitor.getVisitors((result) => {
    console.log("Cvisitor:", result);
    //[{},{},{}]
    res.render("visitor", { data: result });
  });
};

//2.등록부분
exports.register = (req, res) => {
  const name = req.body.name;
  const comment = req.body.content;
  console.log("되냐?");
  Visitor.register(name, comment, (result) => {
    console.log("register", {
      data: result,
    });
    res.json({ success: true, message: "방명록이 등록되었습니다." });
  });
};
