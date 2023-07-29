//promise 객체를 반환하는 promise1 함수 정의

function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve("promise 상태는 fulfilled, then으로 연결, 이때 flag값은 true");
    } else {
      reject("promise 상태는 rejected, catch로 연결, 이때 flag값은 false");
    }
  });
}

// console.log(promise1(true));
// 실행 결과 : Promise { 'promise 상태는 fulfilled, 이때 flag값은 true' }

promise1(true)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    //에러 처리
    console.log(err);
  });

//실행 결과 : promise 상태는 fulfilled, then으로 연결, 이때 flag값은 true

promise1(false)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    //에러 처리
    console.log(err);
  });
//실행 결과: promise 상태는 rejected, catch로 연결, 이때 flag값은 false
