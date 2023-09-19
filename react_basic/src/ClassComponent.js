//1 방법 import { Component } from "react";
//2 방법 import React from "react";
import { Component } from "react";

import PropTypes from "prop-types";

//class형 Component
//class 컴포넌트명 extends Componet{}
//1 방법 class ClassComponent extends Component {}
//2 방법 class ClassComponent extends React.Component {}

class ClassComponent extends Component {
  //클래스형 컴포넌트에서는 render 함수는 필수
  render() {
    // const name = "dongho!!!!!!!";
    const { name } = this.props; //객체로 데이터가 오다보니 구조분해 할당을 해서 사용할 수 있다.

    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <p>여기는 클래스형 컴포넌트</p>
        <h4>{name}</h4>
      </>
    );
  }
}
//부모 컴포넌트에서 데이터가 없으면 defaultProps 값이 들어간다.
ClassComponent.defaultProps = {
  name: "강동호",
};

// 타입 지정, 화면은 렌더 되지만 콘솔에 오류는 뜬다.
// .isRequired (필수로 값이 있어야 한다.)
ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ClassComponent;
