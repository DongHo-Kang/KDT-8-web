//콜백함수 사용 예시
//메인 함수, 함수 타입 파라미터 맨 마지막에 하나 더 선언

function mainFunc(param1, param2, callback) {
  //콜백 함수에 결과 전달
  const result = param1 + param2;
  console.log("mainFunc");
  callback(result);
}

function callbackFunc(param) {
  console.log(param);
}

mainFunc(1, 2, callbackFunc);
