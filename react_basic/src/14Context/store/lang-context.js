// 1번. import React from 'react';

// 2번
import { createContext } from "react";

// 1번. const MyContext = React.createContext();

//2번
//Context 생성
//Provider와 Consumer 두 개의 리액트 컴포넌트를 반환
const MyContext = createContext({
  language: "ko",
  setLanguage: () => {},
  //이 부분은 없어도 된다. 단순히 기본 설정을 알려주는 것 뿐이다.
  //Consumer에서 편하게 사용할 수 있다.
});

export default MyContext;
