import { Link, Route, Routes } from "react-router-dom";
import Student from "./Student";

export default function Main() {
  return (
    <>
      <Link to="/">
        <h2>ReactRouter 실습</h2>
      </Link>
      <nav>
        <ul>
          <li style={{ margin: "4px" }}>
            <Link to="/student/kdt">학생KDT</Link>
          </li>
          <li style={{ margin: "4px" }}>
            <Link to="/student/codingon">코딩온</Link>
          </li>
          <li style={{ margin: "4px" }}>
            <Link to="/student/new?name=kdt3rd">searchParams</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/student/kdt" element={<Student />} exact />
      </Routes>
    </>
  );
}
