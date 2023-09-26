import { Link, useSearchParams } from "react-router-dom";

export const users = [
  { id: 1, name: "홍길동", comment: [{ text: "안녕하세요" }] },
  { id: 2, name: "이몽룡", comment: [{ text: "반갑습니다" }] },
  { id: 3, name: "암꺽정", comment: [{ text: "어서오세요" }] },
];

export default function User() {
  //searchParams는 쿼리스트링 값을 가져오는 것
  //setSearchParams는 쿼리스트링 값을 할당하는 것

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("mode"));
  //user?name=hello&mode=Dark 로 사용해야 한다. ? 뒤에 붙여야 한다.
  setTimeout(() => {
    setSearchParams({ mode: "Light" });
  }, 3000);
  //3초후에 mode 값을 Light로 변경하게 설정할 수 있다.
  return (
    <div>
      <ul>
        {users.map((value) => {
          return (
            <li key={value.id}>
              <Link to={`/user/${value.id}`}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
