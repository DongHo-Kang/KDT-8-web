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

exports.getProfile = (req, callback) => {
  const query = `SELECT *FROM login WHERE id='${req.params.id}' `;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("데이터", rows);
    if (rows.length > 0) {
      const userProfile = rows[0];
      callback(userProfile);
    } else {
      callback(null);
    }
  });
};

exports.postUpdate = (data, callback) => {
  console.log("post", data);
  const query = `UPDATE login SET userid='${data.userId}', name='${data.name}', pw='${data.pw}'WHERE id=${data.id}`;
  conn.query(query, (err, rows) => {
    console.log("update", rows);
    if (err) {
      console.log("update err", err);
      return;
    }
    callback(rows);
  });
};

exports.postDelete = (data, callback) => {
  console.log("delete", data);
  const query = `DELETE FROM login WHERE id='${data.id}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log("delete err", err);
      return;
    }
    callback(rows);
  });
};
