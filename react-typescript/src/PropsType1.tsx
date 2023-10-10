import React, { useState, useRef } from "react";

//?는 선택이다.(있으면 넣고 없으면 안넣는다.)
//만약 ?을 안하면 무조건 값이 있어야 한다.(아니면 오류 발생)
// | Union 타입은 둘 다 적용을 할 수 있다.
interface Props {
  name: string | number;
  age?: number;
}

//방법1.
//FC: Function Component의 약자
const PropsType1: React.FC<Props> = ({ name, age }) => {
  const [count, setCount] = useState<number>(0);
  const myInput = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    //!는 값이 무조건 있을 때 사용.
    myInput.current!.focus();
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {}; //React.MouseEvent<HTMLElement> => 찾기 어렵고 귀찮으면 any를...ㅎㅎ

  return (
    <>
      <h2>Hello {name}</h2>
      <h4>{age}</h4>
      <input ref={myInput} />
      <button onClick={handleFocus}>버튼</button>
      <form action="">
        <button onClick={(e) => onClick(e)}>제출</button>
      </form>
    </>
  );
};

export default PropsType1;

//방법2.
// export default function PropsType1({ name }: Props) {
//   return (
//     <>
//       <h2>Hello {name}</h2>
//     </>
//   );
// }
