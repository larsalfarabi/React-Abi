const intialState = {
  name: "",
  email: "",
  role: "",
  isAuth: false,
};

export const authProcess = (state = intialState, action) => {
  if (action.type === "login") {
    return {
      ...state,
      name: action.name,
      email: action.email,
      role: action.role,
      isAuth: action.isAuth,
    };
  }

  return state;
};
