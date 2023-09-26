import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./12Router/Header";
import Home from "./12Router/Home";
import About from "./12Router/About";
import NotFound from "./12Router/404";
import User from "./12Router/User";
import Redirect from "./12Router/Redirect";
import UserDetail from "./12Router/UserDetail";
import App from "./App";
import Error from "./12Router/Error";

/*
Ver1
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:userId" element={<UserDetail />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
*/

//Ver2
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "redirect",
        element: <Redirect />,
      },
    ],
    errorElement: <NotFound />, //에러 처리
  },
  {
    path: "/user",
    element: <App />,
    children: [
      { path: "", element: <User /> },
      {
        path: ":userId",
        element: <UserDetail />,
        children: [
          {
            path: "Comment",
            element: <comment />,
          },
        ],
      },
    ],
  },
]);

export default Router;
