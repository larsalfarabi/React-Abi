//Membuat state
const colorState = {
  color: "#f54242",
};

//membuat reducer => function untuk merubah value dari state redux
export const colorReducer = (state = colorState, action) => {
  if (action.type === "change") {
    return {
      color: action.color,
    };
  }
  if (action.type === "return") {
    return {
      color: "#f54242",
    };
  }

  return state;
};
