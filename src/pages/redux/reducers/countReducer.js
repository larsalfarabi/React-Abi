//Membuat state
const initialState = {
  value: 0,
  status: "",
};

//membuat reducer => function untuk merubah value dari state redux
export const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      value: state.value + 1,
      status: action.status,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      value: state.value - 1,
      status: action.status,
    };
  }

  return state;
};

