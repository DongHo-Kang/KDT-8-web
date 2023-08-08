const mysql = require("mysql");

//mysql 연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});
conn.connect((err) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("connect");
});

exports.postSignUp = (data, callback) => {
  const query = `INSERT INTO login (userid, name, pw) VALUES ('${data.userId}','${data.name}','${data.pw}')`;
  conn.query(query, (err, rows) => {
    console.log("signup", rows);
    if (err) {
      console.log(err);
      return;
    }
    callback(rows);
  });
};

exports.postSignIn = (data, callback) => {
  const query = `SELECT * From login WHERE userId='${data.userId}' AND pw='${data.pw}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("login", rows);
    callback(rows);
  });
};
