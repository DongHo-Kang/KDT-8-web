import { Component } from "react";

class Counter extends Component {
  //기본적으로 생성자 만들고 this.state를 사용해야 한다.
  //   constructor(props) {
  //     super(props);

  //     //this.state.number의 초기값 할당.
  //     this.state = {
  //       number: 0,
  //     };

  //     //바인딩
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   handleIncrement() {
  //     // this.state.number++; 이렇게 작성하면 안된다.(직접적으로 변경하면 안된다.)
  //     this.setState({ number: this.state.number + 1 }); //setState를 사용해야 한다.
  //   }

  //화살표 함수에서는 생성자와 this 없이 사용 할 수 있다.
  state = {
    number: 0,
  };

  handleDecrement = () => {
    //setState는 호출 직후에 상태가 바로 업데이트 되지 않는다.
    //비동기적으로 동작한다는 뜻
    //React는 여러 setState 호출을 일괄 처리한다.
    this.setState({ number: this.state.number - 1 }); //1번 setState
    this.setState({ number: this.state.number - 1 }); //2번 setState
    //2의 setState가 1의 setState의 결과를 기반으로 동작하지 않는다.

    //================화살표 함수 형태로 사용. 밑에 있는 방법이 좀 더 올바를 방법이다. 위의 코드처럼 직접적으로 변경하게 되면 해킹 당했을 때 위험부담이 더 커진다. =====================//
    this.setState((prevState) => ({ number: prevState.number - 1 })); //이전 상태를 기억한다.
    this.setState((prevState) => ({ number: prevState.number - 1 })); //이전 상태를 기억한다.
  };
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleIncrement}>증가</button>
        <button onClick={this.handleDecrement}>감소</button>
      </div>
    );
  }
}
export default Counter;
