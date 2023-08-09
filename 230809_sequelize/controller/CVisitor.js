const models = require("../models/index");

//전체 방명록 조회
exports.getVisitors = (req, res) => {
  // Visitor.getVisitors((result) => {
  //   res.render("visitor", { data: result });
  // });

  //select*from visitor;와 동일함.
  models.Visitor.findAll().then((result) => {
    res.render("visitor", { data: result });
  });
};

//방명록 하나 조회
exports.getVisitor = (req, res) => {
  // Visitor.getVisitor(req.query.id, (result) => {
  //   res.render("visitor", { data: result });
  // });

  models.Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    res.render("visitor", { data: [result] }); //findOne은 객체만 오니깐 다시 배열로 감싸서 보내야한다.
  });
};

//방명록 하나 추가
exports.postVisitor = (req, res) => {
  // Visitor.postVisitor(req.body, (result) => {
  //   res.send({
  //     result: true,
  //     id: result.insertId,
  //     name: req.body.name,
  //     comment: req.body.comment,
  //   });
  // });

  models.Visitor.creat({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log("result", result);
    res.send({
      result: true,
      id: result.dataValues.id,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};

//방명록 하나 수정
exports.patchVisitor = (req, res) => {
  // Visitor.patchVisitor(req.body, (result) => {
  //   res.send({ result: result });
  // });

  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        //where문 뒤에는 객체형태로 만들어야 한다.
        id: req.body.id,
      },
    }
  ).then((result) => {
    res.send({ result: result });
  });
};

//방명록 하나 삭제
exports.deleteVisitor = (req, res) => {
  // Visitor.deleteVisitor(req.body, (result) => {
  //   res.send({ result: result });
  // });

  models.Visitor.destory({
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    res.send({ result: result });
  });
};
