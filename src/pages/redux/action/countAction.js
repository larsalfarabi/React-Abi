// membuat action
export const increment = () => {
  return {
    type: "INCREMENT",
    status: "berhasil ditambah",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
    status: "berhasil dikurang",
  };
};
