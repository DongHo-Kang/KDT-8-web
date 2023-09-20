import { Component } from "react";
import "./Practice3.css";

class Practice3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      writer: "",
      title: "",
      entries: [],
      filteredEntries: [],
      search: "",
      selectedOption: "작성자",
    };

    this.writeButton = this.writeButton.bind(this);
  }
  writeButton() {
    const { num, writer, title, entries } = this.state;
    const newEntry = { num: num + 1, writer, title };
    this.setState({
      num: num + 1,
      writer: "",
      title: "",
      entries: [...entries, newEntry],
    });
  }
  findButton() {
    const { search, entries, selectedOption } = this.state;
    const filteredEntries = entries.filter((entry) =>
      entry[selectedOption].includes(search)
    );
    this.setState({ filteredEntries });
  }
  allButton() {
    const { entries } = this.state;
    this.setState({
      entries: [...entries],
    });
  }

  selectChange = (e) => {
    this.setState({ selectChange: e.target.value });
  };
  render() {
    const { writer, title, search, filteredEntries, selectedOption } =
      this.state;
    const entriesToDisplay = filteredEntries.length
      ? filteredEntries
      : this.state.entries;
    return (
      <>
        <div className="form">
          작성자 :{" "}
          <input
            value={writer}
            onChange={(e) => this.setState({ writer: e.target.value })}
          ></input>
          제목 :{" "}
          <input
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
          ></input>
          <button onClick={this.writeButton}>작성</button>
        </div>
        <select value={selectedOption} onChange={this.selectChange}>
          <option value="작성자">제목</option>
          <option value="제목">작성자</option>
        </select>
        <input
          value={search}
          onChange={(e) => this.setState({ search: e.target.value })}
        ></input>
        <button onClick={() => this.findButton()}>검색</button>
        <button onClick={() => this.allButton()}>전체</button>
        <br></br>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {entriesToDisplay.map((entry) => (
              <tr key={entry.num}>
                <td>{entry.num}</td>
                <td>{entry.title}</td>
                <td>{entry.writer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
export default Practice3;
