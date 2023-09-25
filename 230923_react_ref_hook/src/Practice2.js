import { useRef, useState } from "react";

export default function Practice2Func() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [entries, setEntries] = useState([]);
  const [select, setSelect] = useState("writer");
  const [search, setSeatch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const writerRef = useRef();
  const titleRef = useRef();
  function onChange(e) {
    console.log(e.target);
    setWriter(e.target.value);
  }

  function submitButton() {
    if (writer.trim().length === 0) {
      writerRef.current.focus();
    } else if (title.trim().length === 0) {
      titleRef.current.focus();
    } else {
      setEntries([...entries, { writer, title }]);
      setTitle("");
      setWriter("");
    }
  }

  function searchButton() {
    const searchResult1 = entries.filter((value) =>
      value[select].includes(search)
    );
    setSearchResult(searchResult1);
  }

  function allButton(e) {
    setSearchResult(entries);
  }

  const entriesToDisplay = searchResult.length ? searchResult : entries;

  return (
    <>
      <form>
        <label>작성자: </label>
        <input
          placeholder="작성자"
          value={writer}
          onChange={(e) => onChange(e)}
          ref={writerRef}
        />
        <label>제목: </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={titleRef}
        />
        <button type="button" onClick={submitButton}>
          작성
        </button>
      </form>

      <form>
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input value={search} onChange={(e) => setSeatch(e.target.value)} />
        <button type="button" onClick={searchButton}>
          검색
        </button>
        <button type="button" onClick={allButton}>
          전체
        </button>
      </form>

      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {entriesToDisplay.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
