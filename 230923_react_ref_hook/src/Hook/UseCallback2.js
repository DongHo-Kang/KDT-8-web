import React, { useState, useCallback } from 'react';

export default function UseCallback2() {
  const [text, setText] = useState('');

  // useCallback 미사용
  // input 태그 업데이트 할 때
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  // after - useCallback 사용
  // 반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸주면 함수를 메모이제이션 해서
  // 컴포넌트가 리렌더링 되더라도 의존하는 값들이 바뀌지 않는 한 기존 함수를 계속 반환
  const onChangeTextUseCallback = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <h1>useCallback test</h1>
      <input onChange={onChangeText} />
      <div>
        <span>작성한 값: {text || '없음'}</span>
      </div>
    </>
  );
}
