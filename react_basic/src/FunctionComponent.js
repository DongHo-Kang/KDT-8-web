//함수형 컴포넌트
//function 컴포넌트명
//const 컴포넌트명 = () => {}

import PropTypes from "prop-types";

//원래는 props를 쓰지만 {}을 통해 구조분해 할당 가능
//function FunctionComponent(props) {
function FunctionComponent({ name, age, children }) {
  const myClass = "kdt8";

  return (
    <>
      <div>반갑습니다 {myClass}에 오신 것을 환영합니다.</div>
      <div>
        {name}, {age}
      </div>
      {/* props.children  */}
      <div>{children}</div>
    </>
  );
}

FunctionComponent.defaultProps = {
  name: "kdt",
  age: 10,
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default FunctionComponent;
//디폴트는 하나만 있어야 한다. 만약 하나의 파일에 여러개의 컴포넌트를 만들때는 default를 빼고 export 하면 된다.
