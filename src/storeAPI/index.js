// store.js
// import counterReducer from "./counterReducer";
import { configureStore } from "@reduxjs/toolkit";
import counterSlices from "./counterSlices";
import todoSlices from "./todoSlices";
// import { legacy_createStore as createStore, combineReducers } from "redux";
// const rootReducer = combineReducers({
//   count: counterReducer,
// });
// const store = createStore(rootReducer);
// export default store;
const store = configureStore({
  reducer: {
    counter: counterSlices,
    todo: todoSlices,
  },
});
export default store;
