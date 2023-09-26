import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./12Router/Main";
import Student from "./12Router/Student";
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/student/:name" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
