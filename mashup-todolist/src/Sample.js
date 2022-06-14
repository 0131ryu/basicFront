import React, { useContext } from "react";
import { useTodoState, useTodoDispatch, useTodoNextId } from "./TodoContext";

function Sample() {
  const state = useTodoState();
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  return <div>Sample</div>;
}

export default Sample;
