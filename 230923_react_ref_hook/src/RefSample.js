import React from "react";

class RefSample extends React.Component {
  handleFocus = () => {
    this.myInput.focus();
  };
  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>
        <input ref={(ref) => (this.myInput = ref)} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample;
