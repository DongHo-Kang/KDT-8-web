import mysql from "mysql2/promise";

const conn = mysql.createPool({
  host: "localhost",
  user: "kdt",
  password: "12345678!",
  database: "kdt8",
});
//createConnection: 단일연결, 매번 연결이 필요할 때마다 새로운 연결 생성
//연결수가 많아지면 성능에 영향이 생김.
//createPool: 여러연결, 여러개의 연결을 미리 생성하고 관리
//요청이 들어올때마다 생성한 연결을 할당. 동시처리가 가능

export const post_signup = async (data) => {
  try {
    const query = `INSERT INTO user1 (userid, pw, name) VALUES (?, ?, ?)`;
    const rows = await conn.query(query, [data.userid, data.pw, data.name]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const post_signin = async (data) => {
  try {
    const query = "SELECT * FROM user1 WHERE userid = ? AND pw = ?";
    const [rows] = await conn.query(query, [data.userid, data.pw]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const post_profile = async (data) => {
  try {
    const query = "SELECT * FROM user1 WHERE userid = ?";
    const [rows] = await conn.query(query, [data.profile]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const edit_profile = async (data) => {
  try {
    const query = "UPDATE user1 SET userid= ?, pw = ?, name = ? WHERE id = ?";
    const [rows] = await conn.query(query, [
      data.userid,
      data.pw,
      data.name,
      data.id,
    ]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const delete_profile = async (id) => {
  try {
    const query = "DELETE FROM user1 WHERE id = ?";
    const [rows] = await conn.query(query, [id]);
  } catch (error) {
    console.log(error);
  }
};
