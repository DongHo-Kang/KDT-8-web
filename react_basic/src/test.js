function TestComponent() {
  const name = "강동호";
  const myStyle = {
    backgroundColor: "blue",
    color: "orange",
    fontSize: "40px",
    padding: "12px",
  };
  return (
    <>
      <div style={myStyle}>{name}</div>
    </>
  );
}

export default TestComponent;
