const express = require("express");
const app = express();
const PORT = 8000;
require("dotenv").config(); //env에 있는 파일 읽어드려라.

let hash = "";
//ejs
app.set("view engine", "ejs");
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get("/", (req, res) => {
  console.log(process.env.NAME);
  console.log(process.env.STATUS);
  console.log(process.env.NODE_ENV);
  res.render("index");
});
app.post("/hash", (req, res) => {
  const { pw } = req.body;
  //const hash = createHashedPassword(pw);
  //hash = createPbkdf(pw);
  hash = bcryptPassword(pw);
  res.json({ hash });
});

app.post("/verify", (req, res) => {
  const { pw } = req.body;
  //const compare = verifyPassword(pw, salt, hash);
  const compare = comparePassword(pw, hash);
  res.json({ compare });
});

app.post("/cipher", (req, res) => {
  const { data } = req.body;
  const encrypt = cipherEncypt(data);
  console.log(encrypt);
  const decrypt = decipher(encrypt);
  res.json({ decrypt });
});

//server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//crypto는 내장모듈이라 따로 설치 안해도 됨.
const crypto = require("crypto");
//functions
const createHashedPassword = (password) => {
  //createHash(알고리즘).update(암호화할 값).digest(인코딩방식)
  return crypto.createHash("sha512").update(password).digest("base64");
};

////
const salt = crypto.randomBytes(16).toString("base64"); //salt생성
const iterations = 100; //반복 횟수
const keylen = 64; //생성할 키의 길이
const digest = "sha512"; //해시 알고리즘

/////단방향 암호화

//암호 생성
const createPbkdf = (password) => {
  //pbkdf2함수(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)으로 생성이 되고 반환되는 값은 Buffer값
  //buffer값은 DB에 들어가지 않는다.
  const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
  //   console.log(hash);
  return hash.toString("base64");
};

//////
//암호 비교
const verifyPassword = (password, salt, dbPassword) => {
  const compare = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    .toString("base64");
  if (compare === dbPassword) {
    return true;
  } else {
    return false;
  }
};

////////양방향 암호화

const algorithm = "aes-256-cbc"; //256비트 키를 사용, 블록크기는 128bit, 지정값
const key = crypto.randomBytes(32); //1바이트가 8비트
const iv = crypto.randomBytes(16); //초기화 벡터,데이터블록을 암호화할때 보안성을 높이기 사용
//암호화
const cipherEncypt = (word) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv); //암호화 객체 생성
  let encryptedData = cipher.update(word, "utf-8", "base64"); //암호화할 데이터 처리
  encryptedData += cipher.final("base64"); //최종 결과 생성
  return encryptedData;
};
//복호화
const decipher = (encryptedData) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv); //복호화 갱체 생성
  let decryterdData = decipher.update(encryptedData, "base64", "utf-8");
  decryterdData += decipher.final("utf-8");
  return decryterdData;
};

//bcrypt(단방향)
const bcrypt = require("bcrypt");
const saltNumber = 10;

//암호화
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, saltNumber);
};

//비교
const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
