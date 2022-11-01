const intialState = {
  name: "",
  email: "",
  isAuth: false,
};

export const authProcess = (state = intialState, action) => {
  if (action.type === "login") {
    return {
      ...state,
      name: action.name,
      email: action.email,
      isAuth: true,
    };
  }

  return state;
};
