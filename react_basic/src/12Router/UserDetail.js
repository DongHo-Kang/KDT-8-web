import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "./User";

export default function UserDetail() {
  //   const params = useParams();
  //   console.log(params);
  //Route에 /user/:userId이기에 userId로 받아올 수 있다.
  const { userId } = useParams();

  return (
    <>
      <div>
        사용자 {userId}은/는 {users[Number(userId) - 1].name}입니다.
      </div>
      <Link to="comment">Comment</Link>
      <Outlet context={{ Comment: userId[Number(userId) - 1].comment }} />
    </>
  );
}
