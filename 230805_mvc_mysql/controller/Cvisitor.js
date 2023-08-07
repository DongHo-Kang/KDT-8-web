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
  Visitor.register(name, comment, (result) => {
    console.log("register", {
      data: result,
    });
    res.json({ success: true, message: "방명록이 등록되었습니다." });
  });
};

//3.수정을 위해 값 클릭된 값 불러오기
exports.getData = (req, res) => {
  const id = req.params.id;
  Visitor.getData(id, (result) => {
    res.json(result);
  });
};

exports.editFin = (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const comment = req.body.comment;
  Visitor.editFin(id, name, comment, (result) => {
    res.json({ success: true, message: "방명록이 수정되었습니다." });
  });
};
