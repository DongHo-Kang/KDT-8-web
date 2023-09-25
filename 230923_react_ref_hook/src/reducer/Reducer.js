export default function Reducer(state, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogin: true,
        message: '로그인 성공!',
      };
    case 'MISS_ID':
      return {
        ...state,
        isLogin: false,
        message: '아이디 오류!',
      };
    case 'MISS_PW':
      return {
        ...state,
        isLogin: false,
        message: '비밀번호 오류!',
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLogin: false,
        message: '아이디랑 비밀번호 모두 오류!',
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        message: '로그아웃!',
      };
    default:
      return {
        ...state,
      };
  }
}
