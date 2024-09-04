import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, editTask } from "./storeAPI/todoSlices";
function Todo() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [seletedId, setSeleted] = useState("");

  const state = useSelector((state) => state.todo);
  //   console.log(state);
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />{" "}
      <button
        onClick={() => {
          dispatch(editTask({ id: seletedId, name: todo }));
        }}
      >
        save
      </button>
      <button onClick={() => dispatch(addTask(todo))}>Add Task</button>
      {state.tasks?.map((item) => (
        <div>
          {item.name}
          <button onClick={() => dispatch(removeTask(item.id))}> Delete</button>
          <button
            onClick={() => {
              setTodo(item.name);
              setSeleted(item.id);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
