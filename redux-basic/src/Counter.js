import { useSelector, useDispatch } from "react-redux";
//import { counterAction } from "./store/index";
import { counterAction } from "./store/counter";
export default function Counter() {
  const number = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(counterAction.increment());
  };
  const minus = () => {
    dispatch(counterAction.decrement());
  };
  const plus = () => {
    dispatch(counterAction.plus({ ten: 10, minus: -15 }));
  };

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={add}>ADD</button>
      <button onClick={minus}>MINUS</button>
      <button onClick={plus}>+</button>
    </div>
  );
}
