//이 함수는 파라미터로 액션의 타입(GET_USER 같은 것)과 Promise를 만들어주는 함수를 받아옴
export function createAsyncDispatcher(type, promiseFn) {
  //성공, 실패에 대한 액션 타입 문자열을 준비함
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  //새로운 함수를 만듭니다
  //...rest를 사용하여 나머지 파라미터를 rest 배열에 담습니다
  async function actionHandler(dispatch, ...rest) {
    dispatch({ type }); //요청 시작됨
    try {
      const data = await promiseFn(...rest);
      dispatch({
        type: SUCCESS,
        data,
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        error: e,
      });
    }
  }
  return actionHandler; //만든 함수를 반환함
}

export const initialAsyncState = {
  loading: false,
  data: null,
  error: null,
};

//로딩 중일 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

//성공 했을 때 상태 만들어주는 함수
const success = (data) => ({
  loading: false,
  data,
  error: null,
});

//실패 했을 때 상태 만들어주는 함수
const error = (data) => ({
  loading: false,
  data: null,
  error: error,
});

//세 가지 액션을 처리하는 리듀서를 만드렁줍니다
//type은 액션 타입, key는 리듀서서 사용할 필드 이름
export function createAsyncHandler(type, key) {
  //성공, 실패에 대한 액션 타입 문자열을 준비합니다
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  //함수를 새로 만듦
  function handler(state, action) {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: loadingState,
        };
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data),
        };
      case ERROR:
        return {
          ...state,
          [key]: error(action.error),
        };
      default:
        return state;
    }
  }
  return handler;
}
