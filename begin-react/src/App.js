// import React, { useMemo, useRef, useState, useCallback } from "react";
import React, { useReducer, useCallback, useRef, useMemo } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./useInputs";
import produce from "immer";

function countActiveUsers(users) {
  console.log("활성 사용자 수 세는 중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    // case "CHANGE_INPUT":
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value,
    //     },
    //   };
    case "CREATE_USER":
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case "TOGGLE_USER":
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    case "REMOVE_USER":
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

function App() {
  // const [{ username, email }, onChange, onReset] = useInputs({
  //   username: "",
  //   email: "",
  // });

  const [state, dispatch] = useReducer(reducer, initialState);
  // const nextId = useRef(4);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      <UserDispatch.Provider value={dispatch}>
        <CreateUser />
        <UserList users={users} />
        <div>활성사용자 수 : {count}</div>
      </UserDispatch.Provider>
    </div>
  );
}

export default App;
