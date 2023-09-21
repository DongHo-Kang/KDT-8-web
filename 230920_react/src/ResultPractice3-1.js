import { Component } from "react";

class ResultPractice3 extends Component {
  constructor(props) {
    super(props);
    // state 초기화
    this.state = {
      inputWriter: "", //작성자
      inputTitle: "", //제목
      comments: [], //입력한 내용
      inputSearch: "", //검색내용
      searchType: "title", //검색타입
      results: [], //검색결과
    };
    //바인딩
    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.searchComment = this.searchComment.bind(this);
  }
  onChange(e) {
    console.log(e.target);
    this.setState({ inputWriter: e.target.value });
  }
  addComment() {
    const newComment = {
      writer: this.state.inputWriter,
      title: this.state.inputTitle,
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      inputTitle: "",
      inputWriter: "",
    });
  }
  searchComment() {
    const searchResult = this.state.comments.filter((value) => {
      console.log(
        value[this.state.searchType].inCludes(this.state.inputSearch)
      );
      //value[this.state.searchType]  : 객체에서 접근할 때 특수문자나 길어지면 배열로 접근하면된다.
      if (value[this.state.searchType].inCludes(this.state.inputSearch)) {
        return true;
      } else {
        return false;
      }
    });
  }
  render() {
    const {
      inputWriter,
      inputTitle,
      comments,
      inputSearch,
      searchType,
      results,
    } = this.state;
    return (
      <>
        <form>
          <label htmlFor="writer">작성자:</label>
          <input
            type="text"
            id="writer"
            value={inputWriter}
            //onChange: input, textarea, select 값이 변경될 때마다 발생하는 이벤트 핸들러
            onChange={(e) => this.onChange(e)}
          />
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={inputTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          />
          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>

        <form>
          {/* select의 value 값은 페이지를 열었을 때 선택된 채로 열린다. */}
          <select
            value={searchType}
            onChange={(e) => this.setState({ searchType: e.target.value })}
          >
            <option value="writer">작성자</option>
            <option value="title">제목</option>
          </select>
          <input
            type="text"
            placeholder="검색어"
            value={inputSearch}
            onChange={(e) => this.setState({ inputSearch: e.target.value })}
          />
          <button type="button" onClick={this.searchComment}>
            검색
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
            {/* [ {title, writer}, {title, writer}, {title, writer}...] */}
            {comments.map((value, index) => {
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
        <h4>검색</h4>
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {/* [ {title, writer}, {title, writer}, {title, writer}...] */}
            {results.map((value, index) => {
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
}

export default ResultPractice3;
