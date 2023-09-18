function App() {
  //return안에가 jsx이다.
  //JSX요소에 반드시 부모 요소가 필요하다.(CSS 적용이 필요 없으면 빈태그를 주로 사용)
  //스타일 태그는 반드시 객체 형태로 들어가야 한다.
  //조건식은 삼항연산자를 사용.
  //삼항연산자를 사용하지 않으려면 위에서 조건을 다 마무리하고 보내야한다.
  const flag = true;
  let txt = "";

  if (flag) {
    txt = "true입니다.";
  } else {
    txt = "false입니다.";
  }

  const style = {
    backgroundColor: "red",
  };

  //실습1
  const num1 = 3;
  const num2 = 5;
  const cal = num1 + num2;

  //실습2
  const name = "루키";
  const animal = "강아지";

  //실습3
  const divStyle = {
    textAlign: "center",
  };
  const test = {
    backgroundColor: "orange",
    color: "red",
    marginLeft: "250px",
    marginRight: "250px",
    textAlign: "center",
    fontSize: "50px",
  };
  const input = {
    margin: "15px",
  };
  const title = "Hello World";

  //실습4
  const divStyle1 = {
    display: "flex",
  };
  const red = {
    backgroundColor: "red",
    width: "50px",
    height: "50px",
  };
  const orange = {
    backgroundColor: "orange",
    width: "50px",
    height: "70px",
  };
  const yellow = {
    backgroundColor: "yellow",
    width: "50px",
    height: "90px",
  };
  const green = {
    backgroundColor: "green",
    width: "50px",
    height: "110px",
  };
  const blue = {
    backgroundColor: "blue",
    width: "50px",
    height: "130px",
  };
  const navy = {
    backgroundColor: "navy",
    width: "50px",
    height: "150px",
  };
  const purple = {
    backgroundColor: "purple",
    width: "50px",
    height: "170px",
  };

  //Map()
  const lists = ["k", "d", "t", "w", "e", "b"];

  //실습5
  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];

  //단축평가
  const loading = true;
  return (
    <>
      {/* 단축평가 */}
      {loading && (
        <>
          <h1 style={{ backgroundColor: "black", color: "white" }}>
            Hello React!
          </h1>
          <div style={style}>리액트 시작</div>
          {/* <div>리액트 시작</div> */}
          <input type="text" />
          <div>{flag ? <h1>true입니다.</h1> : <h1>flase입니다.</h1>}</div>
          <div>{txt}</div>
          <br></br>

          {/* 실습1 */}
          <div>
            이것은 div입니다.
            <h3>이것은 div안에 있는 h3태그입니다.</h3>
          </div>
          <div>{cal === 8 ? <h1>정답입니다!</h1> : <h1>오답입니다!</h1>}</div>

          {/* 실습2 */}
          <div>제 반려 동물의 이름은 {name}입니다.</div>
          <div>
            {name}는 {animal}입니다.
          </div>
          {/* 실습3 */}
          <div style={divStyle}>
            <div style={test}> {title}</div>
            아이디:
            <input type="text" style={input} />
            <br></br>
            비밀번호:
            <input type="text" style={input} />
          </div>

          {/* 실습4 */}
          <div style={divStyle1}>
            <div style={red}></div>
            <div style={orange}></div>
            <div style={yellow}></div>
            <div style={green}></div>
            <div style={blue}></div>
            <div style={navy}></div>
            <div style={purple}></div>
          </div>

          {/* map() */}
          {lists.map((value, index) => {
            return <div key={index}>Hello {value}</div>;
          })}

          {/* 실습5 */}
          {users
            .filter((user) => user.vip)
            .map((user, index) => (
              <div key={index}>- {user.name}</div>
            ))}
        </>
      )}
    </>
  );
}

export default App;
