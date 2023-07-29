function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
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

async function exec() {
  let kim = await call(`kim`); //값을 받아올때까지 기다린다. await
  console.log(kim + "반가워");

  let txt = await back();
  console.log(txt + "를 실행했습니다.");

  let message = await hell();
  console.log("여기는" + message);
}

exec();
