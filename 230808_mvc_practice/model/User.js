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
    }
    callback(rows);
  });
};

exports.postSignIn = (data, callback) => {
  const query = `SELECT name From login WHERE userId='${data.userId}' AND pw='${data.pw}'`;
  conn.query(query, (err, rows) => {
    console.log("login", rows);
    if (err) {
      console.log(err);
    }
    callback(rows);
  });
};
