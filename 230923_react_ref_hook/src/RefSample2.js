import React from "react";

class RefSample2 extends React.Component {
  myInput = React.createRef();
  handleFocus = () => {
    this.myInput.current.focus();
  };
  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>

        <input ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample2;
