import { Component } from "react";

class Disappear extends Component {
  state = {
    text: "안녕하세요",
  };

  DisappearButton = () => {
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    return (
      <>
        <button onClick={this.DisappearButton}>사라져라</button>
        <h1>{text}</h1>
      </>
    );
  }
}

export default Disappear;
