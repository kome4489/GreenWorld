const init = store => next => (action) => {
  const { body, types } = action.payload;
  const [type] = types;
  next({
    type,
    payload: Object.assign({}, action.payload, {
      body,
    }),
  });
};

export default init;
