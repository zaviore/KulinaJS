export const increment = (data) => {
  console.log(data, "asdasda");

  return {
    type: "STATES",
    payload: async () => {
      return data;
    },
  };
};
