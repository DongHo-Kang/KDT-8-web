import { Component } from "react";

class ChangeColor extends Component {
  state = {
    text: "검정색 글씨",
    color: "black",
  };

  redButton = () => {
    this.setState({ text: "빨간색 글씨", color: "red" });
  };

  blueButton = () => {
    this.setState({ text: "파란색 글씨", color: "blue" });
  };

  render() {
    const { text, color } = this.state;
    const style = { color: color };
    return (
      <>
        <h1 style={style}>{text}</h1>
        <button onClick={this.redButton}>빨간색</button>
        <button onClick={this.blueButton}>파란색</button>
      </>
    );
  }
}
export default ChangeColor;
