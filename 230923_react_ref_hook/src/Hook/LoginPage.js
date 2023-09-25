import { useReducer } from "react";
import Reducer from "../reducer/Reducer";

const LoginPage = () => {
  const [state, dispatch] = useReducer(Reducer,{
    isLogin: false
    message: "",
  });

  return (
    <div>
      {state.isLogin ? (
        <>
          <h1>환영합니다~ </h1>
          <button onClick={()=>dispatch(type: "Log out"
            )}>로그아웃</button>
        </>
      ) : (
        <LoginForm state={state} dispatch={dispatch} />
      )}
    </div>
  );
};
