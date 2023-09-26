import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const nameStyle = {
  color: "orange",
};

export default function Student() {
  const navi = useNavigate();
  const onClick = () => {
    navi(-1);
  };

  const params = useParams();
  console.log(params);

  const { name } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));

  const realName = searchParams.get("name");

  return (
    <>
      <h2>
        학생이름은 <span style={nameStyle}>{name}</span> 입니다.
      </h2>

      {realName && <h2>실제 이름은 {searchParams.get("name")}</h2>}
      <button onClick={onClick}>이전 페이지로</button>
    </>
  );
}
