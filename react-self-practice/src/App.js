// function App() {
//   let list = ["a", "b", "c", "d", "e"];
//   let items = list.map((txt, id, arr) => {
//     console.log("txt: ", txt);
//     console.log("id: ", id);
//     console.log("arr: ", arr);
//     return txt + id;
//   });
//   return (
//     <>
//       <h1>{items}</h1>
//     </>
//   );
// }

function App() {
  const list = ["T", "S", "t", "o", "r", "y"];
  return (
    <>
      <ol>
        {list.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })}
      </ol>
    </>
  );
}

export default App;
