import { useDispatch } from "react-redux";
import { ADD_CART } from "./store/cart";

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "A상품",
      price: 1000,
    },
    {
      id: 2,
      name: "B상품",
      price: 1500,
    },
    { id: 3, name: "C상품", price: 2000 },
  ];

  const dispatch = useDispatch();

  //추후 Dispatch 형태로 변경
  const addProduct = (product) => {
    // product는 위에 있는 products 배열의 객체 하나
    dispatch({ type: ADD_CART, product: product });
  };

  return (
    <div>
      <h2>상품리스트</h2>
      {products.map((value) => {
        return (
          <div key={value.id}>
            <span>
              {value.name} : {value.price}
            </span>
            <button onClick={() => addProduct(value)}>장바구니에 추가</button>
          </div>
        );
      })}
    </div>
  );
}
