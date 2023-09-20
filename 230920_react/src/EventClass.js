import { Component } from "react";

class EventClass extends Component {
  //생성자
  constructor(props) {
    super(props); //부모 클래스인 component의 생성자 호출

    this.handleClick = this.handleClick.bind(this);
  }

  //일반 함수
  //binding 해줘야 한다.
  //   constructor(props) {
  //     super(props); //부모 클래스인 component의 생성자 호출

  //     this.handleClick = this.handleClick.bind(this);
  //   }
  handleClick() {
    console.log(this);
    alert("클래스형 컴포넌트");
  }

  //화살표 함수
  //binding을 안해도 된다.
  handleClick2 = () => {
    console.log("화살표 함수", this);
    alert("클래스형 컴포넌트 2번");
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>클릭class</button>
        <button onClick={this.handleClick2}>클릭class 2번</button>
      </>
    );
  }
}

export default EventClass;
