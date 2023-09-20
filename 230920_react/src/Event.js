function Event() {
  //고정값 출력
  const handleClick = () => {
    alert("클릭했습니다.");
  };

  //값을 받아올 때
  //콘솔에 이벤트의 값을 확인할 수 있다.
  const handleClick2 = (e, str) => {
    console.log(e);
    alert(str);
  };
  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <button onClick={(e) => handleClick2(e, "클릭2 클릭")}>클릭2</button>
    </>
  );
}

export default Event;
