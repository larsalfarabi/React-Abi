import React, { useReducer } from "react";
import { Link } from "react-router-dom";
const Reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
      showText: state.showText,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
      showText: state.showText,
    };
  }
  if (action.type === "toggleShowText") {
    return {
      count: state.count,
      showText: !state.showText,
    };
  }
  return state;
};
const ReducerMateri = () => {
  const [state, dispatch] = useReducer(Reducer, {
    count: 0,
    showText: true,
  });
  return (
    <div className="space-x-5">
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Tambah
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >Click Kurang</button>
      {state.showText && <p>Text ini muncul</p>}
      <Link to={"/useRef"}>Back</Link>
    </div>
  );
};

export default ReducerMateri;
