import { Link, redirect, useNavigate } from "react-router-dom";

//a 태그는 페이지가 새로고침이 되지만
//Link는 컴포넌트만 변하기 떄문에 새로고침이 되지 않는다.

export default function Header() {
  //useNavigate():Link컴포넌트를 사용하지 않고 사용자를 어딘다로 이동시키는 기능(간접적으로 이동)
  // -1 :이전 페이지로 이동
  // 루트페이지를 통해 이동하려면 '/'를 적고 기존 URL에 계속 뒤에 붙여서 사용하려면 '/'를 사용하지 않는다.
  const navi = useNavigate();
  const onClick = () => {
    navi("redirect");
  };

  //Link: 유저가 클릭
  return (
    <div>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <button onClick={onClick}>Redirect</button>
        </li>
      </ul>
    </div>
  );
}
