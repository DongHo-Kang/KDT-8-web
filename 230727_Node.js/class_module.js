//하나의 모듈 파일에 여러개 만들기
const abc = "a 변수";
const b = "b 변수";
const c = 20;

// module.exports = { a : abc, b, age: c};

//{}안에 있는게 객체 원래는 {a: a 변수 , b: b 변수}

//하나의 모듈 파일에 하나 만들기
function connect() {
  return a + b;
}

module.exports = connect;
