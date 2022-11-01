export const logger = (state) => {
  return (next) => {
    return (action) => {
      console.log(`Memanggil ${action.type}`);
      if (action.type === "change") {
        return next(action);
      } else {
        return;
      }
    };
  };
};
export const tes = (state) => {
  console.log("state", state);
  return (next) => {
    return (action) => {
      if (action.type !== "purple") {
        action.color = "purple";
        return next(action);
      }

      return next(action);
    };
  };
};
