import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import CircleComponet from "./CircleComponent";
import TestComponent from "./test";
import Test2Component from "./test2";
import ClassPropsComponent from "./ClassPropsComponent";
import FunctionPropsComponent from "./FunctionPropsComponent";
function App() {
  return (
    <>
      {/* <CircleComponet></CircleComponet>
      <br></br>
      <br></br>
      <h1>컴포넌트</h1>
      <ClassComponent />
      <FunctionComponent></FunctionComponent>
      <ClassComponent></ClassComponent>
      <test2Component></test2Component>

      <br></br>
      <TestComponent />
      <Test2Component /> */}
      {/* <ClassComponent></ClassComponent>
      <ClassComponent name="dongho"></ClassComponent> */}
      {/* <FunctionComponent name="부모입니다." age={12}>
        안녕
      </FunctionComponent>
      <FunctionComponent></FunctionComponent> */}
      {/* <ClassPropsComponent food="사과"></ClassPropsComponent>
      <ClassPropsComponent></ClassPropsComponent> */}
      <FunctionPropsComponent
        title="나의 하루는 4시 40분에 시작된다."
        author="김유진"
        price="13,500원"
        type="자기계발서"
      ></FunctionPropsComponent>
    </>
  );
}

export default App;
