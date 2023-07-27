//하나의 모듈 파일에 여러 개 만들기
const a = "a 변수";
const b = "b 변수";
const c = 20;

module.exports = { a, b, c };

//하나의 모듈 파일에 하나 만들기
const d = "d 변수";
const e = "e 변수";
const f = 20;

function connect() {
  return d + e + f;
}

module.exports = connect;
