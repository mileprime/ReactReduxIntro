import { DECREMENT, INCREMENT, increment } from "./actions";

const initialState = { count: 0 };

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
      break;
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
      break;
  }
};
export default countReducer;
