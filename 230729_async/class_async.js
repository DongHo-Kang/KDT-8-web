console.log(1);

setTimeout(function () {
  console.log(2);
}, 5000);

console.log(3);

setTimeout(function () {
  console.log(4);
}, 2000);

// 실행해보면 1-> 3 -> 4 -> 2로 나온다.
// 실행과정은 1이 출력되고 2가 출력되어하는데 5초 뒤에 실행되야 한다. 그 사이에 3 이랑 4가 출력되는 것이다.
