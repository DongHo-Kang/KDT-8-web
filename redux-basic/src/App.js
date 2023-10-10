// redux , legacy
// import Main from "./Main";

// function App() {
//   return (
//     <>
//       <Main />
//     </>
//   );
// }

//redux_toolkit
import Cart from "./Cart";
// import Counter from "./Counter";
// import Login from "./Login";
import ProductList from "./ProductList";

function App() {
  return (
    <>
      <ProductList />
      <Cart />
      {/* <Login />
      <Counter /> */}
    </>
  );
}

export default App;
