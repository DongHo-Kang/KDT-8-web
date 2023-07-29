let product;
let price;

goMart();
pickDrink(pay);
// pay(product, price);

function goMart() {
  console.log("마트 도착 음료를 골라보자");
}

function pickDrink(callback) {
  setTimeout(function () {
    console.log("선택 완료");
    product = "콜라";
    price = 1000;
    callback(product, price);
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
