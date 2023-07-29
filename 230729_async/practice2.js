//callback hell

//1초마다 배경색 변경
//빨 -> 주 -> 노 -> 초 -> 파

function change(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = n;
      resolve();
    }, 1000);
  });
}

change("red")
  .then(function () {
    return change("orange");
  })
  .then(function () {
    return change("yellow");
  })
  .then(function () {
    return change("green");
  })
  .then(function () {
    return change("blue");
  });
