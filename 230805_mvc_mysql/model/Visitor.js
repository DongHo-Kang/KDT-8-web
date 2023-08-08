//mysql 연결 전
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다." },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };
//

//mysql 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

//mysql 연결 후
//1.조회부분
exports.getVisitors = (callback) => {
  const sql = "SELECT * FROM visitor;";
  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("Visitor :", rows);
    callback(rows);
  });
};

//2.추가부분
exports.register = (name, comment, callback) => {
  const sql = `INSERT INTO visitor(name, comment) values (?,?);`;
  //name과 comment 값을 바인딩할 때, 퀴리 문자열 내에 직접 값을 넣는게 아니라 ? 사용한다. 이러면 SQL injection을 방지할 수 있다.
  conn.query(sql, [name, comment], (err, rows) => {
    //?부분을 넣기 위해 [name, comment] 사용.
    if (err) throw err;

    console.log("insert:", rows);
    callback(rows);
  });
};

//3.
exports.getData = (id, callback) => {
  const sql = "SELECT name, comment FROM visitor WHERE id = ?";
  conn.query(sql, [id], (err, result) => {
    console.log(result);
    callback(result);
  });
};

exports.editFin = (id, name, comment, callback) => {
  const sql = `UPDATE visitor SET name= '${name}' , comment = '${comment}' WHERE id ='${id}' `;
  conn.query(sql, (err, result) => {
    console.log(result);
    callback(result);
  });
};

//4. 삭제
