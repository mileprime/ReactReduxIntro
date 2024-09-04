import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, action) => {
      console.log(action.payload, "payload");
      const newTask = state.tasks;
      newTask.push({ id: Math.random(), name: action.payload });
      state.tasks = newTask;
    },
    removeTask: (state, action) => {
      let deleteTask = state.tasks;
      deleteTask = deleteTask.filter((item) => item.id != action.payload);
      console.log(deleteTask, "payload");
      state.tasks = deleteTask;
    },
    editTask: (state, action) => {
      // action.payload ={id:x,name:""}
      let editTask = state.tasks;
      editTask = editTask.map((item) => {
        if ((action.payload.id = item.id)) {
          return { ...item, name: action.payload.name };
        } else return item;
      });
      console.log(action.payload, "payload");
      state.tasks = editTask;
    },
  },
});

export const { addTask, removeTask, editTask } = TodoSlice.actions;

export default TodoSlice.reducer;
