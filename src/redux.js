//Membuat state
const initialState = {
  value: 0,
  status: "",
};

//membuat reducer => function untuk merubah value dari state redux

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(state);
      return {
        ...state,
        value: state.value + 1,
        status: action.status,
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1,
        status: action.status,
      };
    default:
      return state;
  }
};
