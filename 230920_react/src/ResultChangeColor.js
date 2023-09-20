import { Component } from "react";

class ResultChangeColor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "검정",
      color: "black",
    };
    this.handleRed = this.handleRed.bind(this);
    this.handleBlue = this.handleBlue.bind(this);
  }

  handleRed() {
    this.setState(() => {
      return { text: "빨간", color: "red" };
    });
  }

  handleBlue() {
    this.setState(() => ({ text: "파란", color: "blue" }));
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.state.text}색 글씨</h1>
        <button onClick={this.handleRed}>빨간색</button>
        <button onClick={this.handleBlue}>파란색</button>
      </div>
    );
  }
}

export default ResultChangeColor;
