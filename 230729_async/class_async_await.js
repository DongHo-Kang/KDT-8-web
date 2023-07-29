// async / await

//구조
//함수 앞에 async 키워드 붙이기
//비동기 처리 메서드 앞에 await 붙이기 (기다려줄 것)
//async, await 항상 같이 쓰기

let product;
let price;
exec();

function goMart() {
  console.log("마트 도착 음료를 골라보자");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("선택 완료");
      product = "콜라";
      price = 1000;
      if (price <= 2000) {
        resolve();
      } else {
        reject("돈이 부족해요.");
      }
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function exec() {
  goMart(); //1번으로 실행
  await pickDrink(); //2번으로 실행
  pay(); //3번으로 실행
}
