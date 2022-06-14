// import React, { useState, useEffect, useReducer } from "react";
import React, { useState } from "react";
import { useUserState, useUserDispatch, getUsers } from "./UserContext";
// import axios from "axios";
// import useAsync from "./useAsync";
import User from "./User";

// useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.
// async function getUsers() {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   return response.data;
// }

function Users() {
  const [userId, setUserId] = useState(null);
  const state = useUserState();
  const dispatch = useUserDispatch();

  const { loading, data: users, error } = state.users; //state.data를 users 키워드로 조회

  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username}({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </div>
  );
}

export default Users;
