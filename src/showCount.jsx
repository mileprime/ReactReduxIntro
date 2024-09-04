import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./storeAPI/counterSlices";
function CountComponent() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counter.count);
  console.log(state);
  return (
    <div>
      {state}
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default CountComponent;
