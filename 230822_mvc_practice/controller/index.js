const listsModel = require("../model/Model");

const main = (req, res) => {
  res.render("index");
};

const listsAll = (req, res) => {
  res.render("lists", { lists: listsModel });
};

// const add = (req, res) => {
//   res.render("add");
// };

const addlists = (req, res) => {
  const receivedData = req.body; // 데이터를 받아옴
  console.log("Received data:", receivedData); // 받아온 데이터를 로그로 출력
  res.json({ result: true, data: receivedData }); // 클라이언트에게 응답 전송
};

module.exports = {
  main,
  listsAll,
  addlists,
};
