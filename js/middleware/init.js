import * as Types from '../constants/ActionTypes';

const init = store => next => (action) => {
  if (action.type === Types.CHAT_API || action.type === Types.QUERY_API) {
    return next(action);
  }
  const { body, types } = action.payload;
  const [type] = types;
  return next({
    type,
    payload: Object.assign({}, action.payload, {
      body,
    }),
  });
};

export default init;
