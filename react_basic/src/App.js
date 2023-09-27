// import ClassComponent from "./ClassComponent";
// import FunctionComponent from "./FunctionComponent";
// import CircleComponet from "./CircleComponent";
// import TestComponent from "./test";
// import Test2Component from "./test2";
// import ClassPropsComponent from "./ClassPropsComponent";
// import FunctionPropsComponent from "./FunctionPropsComponent";
// import LifeCycleClass from "./08LifeCycle/LifeCycleClass";
// import LifeCycleFunc from "./08LifeCycle/LifeCyccleFunc";
// import Practice1 from "./08LifeCycle/Practice1";
// import ResultPractice1 from "./08LifeCycle/ResultPractice1";
// import ResultPractice2 from "./08LifeCycle/ResultPractice2";
// import Style from "./11style/Style";
// import SassComponent from "./11style/SassComponent";
// import CircleComponet1 from "./11style/CircleComponent1";
// import StylePractice from "./11style/StylePractice";
// import StyledComponent from "./11style/StyledComponent";
// import StyledPractice1 from "./11style/StyledPractice1";
// import StyledPractice2 from "./11style/StyledPractice2";

// import Router from "./Router";

import Form from "./13Form/Form";

import { Outlet } from "react-router-dom";
import Header from "./12Router/Header";
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
      {/* <FunctionPropsComponent
        title="나의 하루는 4시 40분에 시작된다."
        author="김유진"
        price="13,500원"
        type="자기계발서"
      ></FunctionPropsComponent> */}
      {/* <LifeCycleClass /> */}
      {/* <LifeCycleFunc /> */}
      {/* <Practice1 /> */}
      {/* <ResultPractice1 /> */}
      {/* <ResultPractice2 /> */}
      {/* <Style /> */}
      {/* <SassComponent /> */}
      {/* <CircleComponet1 /> */}
      {/* <StylePractice /> */}
      {/* <StyledComponent /> */}
      {/* <StyledPractice1 /> */}
      {/* <StyledPractice2 /> */}
      {/* ver1*/}
      {/* <Router />  */}
      {/* ver2 */}
      {/* <Header />
      <Outlet /> 자식 컴포넌트들도 불러오는 것 */}
      <Form />
    </>
  );
}

export default App;
