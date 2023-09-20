import { Component } from "react";

class PEventClass extends Component {
  messageClick = () => {
    alert(this.props.message);
  };

  render() {
    return (
      <>
        <button onClick={this.messageClick}>Show Message</button>
      </>
    );
  }
}
export default PEventClass;
