import { BrowserRouter } from "react-router-dom";
import Main from "./12Router/Main";
import Router from "./Router";
import Form from "./13Form/Form";
import ThemeProvider from "./14Context/ThemeProvider";
import ThemeSelector from "./14Context/ThemeSelector";
import LangSelector from "./14Context/LangSelector";
import "./App.css";
import { CartProvider } from "./14Context/store/cart-context";
import ProductList from "./14Context/ProductList";
import Cart from "./14Context/Cart";
import CartItem from "./14Context/CartItem";

function App() {
  // const name = "로이";
  // const animal = "강아지";
  // const title = "Hello React";
  return (
    <>
      {/*
      실습1
      <div>
        이것은 div입니다.
        <h3>이것은 div안에 있는 h3입니다.</h3>
      </div>
      <div>{3 + 5 === 7 ? <div>정답입니다.</div> : <div>오답니다.</div>}</div>
      {/* 실습2 
      <h2>
        제 반려동물의 이름은 <u>{name}</u>입니다.
        <br></br>
        {name}는 {animal}입니다.
      </h2>

      {/* 실습3 
      <div className="text">{title}</div>
      <div className="input">
        아이디: <input />
        <br />
        <br />
        비밀번호: <input />
      </div>

      <div className="all">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div> */}
      {/* <Router /> */}
      {/* <Form /> */}
      {/* <ThemeProvider>
        <ThemeSelector />
        <LangSelector />
      </ThemeProvider> */}
      <CartProvider>
        <ProductList />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
