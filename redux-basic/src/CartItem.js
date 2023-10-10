import { useDispatch } from "react-redux";
import { REMOVE_CART } from "./store/cart";

export default function CartItem({ value }) {
  //필터를 사용하여 새로운 배열을 반환
  const dispatch = useDispatch();
  const removeCart = (id) => {
    dispatch({ type: REMOVE_CART, id });
  };

  return (
    <div key={value.id}>
      <span>
        {value.name} : {value.price * value.quantity}원({value.quantity}개)
      </span>
      <button onClick={() => removeCart(value.id)}>제거</button>
    </div>
  );
}
