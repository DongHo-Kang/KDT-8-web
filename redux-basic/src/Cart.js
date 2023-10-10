import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state);
  console.log(cart);
  //reduce: 배열의 모든 요소를 더할 때 사용, 하나의 결과를 반환
  const totalPrice = cart.reduce(
    (acc, val) => acc + val.price * val.quantity,
    0
  );

  return (
    <div>
      <h2>장바구니</h2>
      {/*cart 배열에 담긴 value는 products배열의 객체 하나 */}
      {cart.map((value) => {
        <CartItem key={value.id} value={value} />;
      })}
      {totalPrice}
    </div>
  );
}
