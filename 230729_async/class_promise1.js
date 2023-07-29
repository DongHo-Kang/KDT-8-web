let product;
let price;

goMart();
pickDrink()
  .then(pay)
  .catch((err) => {
    console.log(err);
  });

function goMart() {
  console.log("마트 도착 음료를 골라보자");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("선택 완료");
      product = "콜라";
      price = 3000;
      if (price <= 2000) {
        resolve();
      } else {
        reject("돈이 부족해요.");
      } //작업 성공(resolve) 시 then으로 연결,  실패(reject) 시 catch로 연결
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
