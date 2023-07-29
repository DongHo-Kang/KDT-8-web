function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); //작업 성공(resolve) 시 then으로 연결,  실패(reject) 시 catch
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`back`);
      resolve(`back`);
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {}, 1000);
    resolve(`callback hell`);
  });
}

call(`kim`)
  .then(function (name) {
    console.log(name + "반가워");
    return back();
  })
  .then(function (txt) {
    console.log(txt + "를 실행했습니다.");
    return hell();
  })
  .then(function (message) {
    console.log("여기는" + message);
  });

// call(`kim`, function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "를 실행했습니다.");
//     hell(function (message) {
//       console.log("여기는" + message);
//     });
//   });
// });
