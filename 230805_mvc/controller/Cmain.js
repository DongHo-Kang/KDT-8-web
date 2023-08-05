const Comment = require("../model/Comment");

exports.main = (req, res) => {
  res.render("index");
};

//댓글 목록
exports.comments = (req, res) => {
  console.log(Comment.commentInfos());
  res.render("comments", { commentInfos: Comment.commentInfos() });
};

exports.comment = (req, res) => {
  console.log(req.params.id);

  const commentId = req.params.id;
  const comments = Comment.commentInfos();
  console.log(comments[commentId - 1]);
  //:id 변수에 숫자가 아닌 값 처리
  if (isNaN(commentId)) {
    return res.render("404");
  }
  //존재하지 않는 댓글 id
  if (commentId < 1 || commentId > commentId.length) {
    return res.render("404");
  }
  res.render("comment", { commentInfos: comments[commentId - 1] });
};
