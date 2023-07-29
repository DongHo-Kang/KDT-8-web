//Promise 체이닝

//체이닝 사용 안 한 경우
//(4+3)*2-1 연산

function add(n1, n2, callback) {
  setTimeout(function () {
    let result = n1 + n2;
    callback(result);
  }, 1000);
}

function mul(n, callback) {
  setTimeout(function () {
    let result = n * 2;
    callback(result);
  }, 700);
}

function sub(n, callback) {
  setTimeout(function () {
    let result = n - 1;
    callback(result);
  }, 500);
}

//add -> mul -> sub
add(4, 3, function (x) {
  console.log("1: ", x);
  mul(x, function (y) {
    console.log("2: ", y);
    sub(y, function (z) {
      console.log("3: ", z);
    });
  });
});

//#########################################
//체이닝 사용 한 경우
//장점 : then 메서드를 연속해서 사용 가능 -> 순차적으로 작업 가능
//예외처리 간편 -> 마지막에 catch 구문으로 한 번에 처리 가능
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      //resolve(result);
      reject(new Error("에러 처리"));
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log("1:", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2:", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3:", result);
  })
  .catch(function (err) {
    console.log(err);
  });
