import { Component } from "react";

class ResultDisappear extends Component {
  state = {
    visible: "block",
  };
  handleVisible = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleVisible}>
          {this.state.visible ? "사라져라" : "보여라"}
        </button>
        <h1>{this.state.visible && "안녕하세요"}</h1>
      </div>
    );
  }

  //   state = {
  //     visible: "block",
  //   };
  //   handleVisible = () => {
  //     this.setState(() => ({ visible: "none" }));
  //   };
  //   render() {
  //     return (
  //       <div>
  //         <button onClick={this.handleVisible}>사라져라</button>
  //         <h1 style={{ display: this.state.visible }}>안녕하세요</h1>
  //       </div>
  //     );
  //   }
}

export default ResultDisappear;
