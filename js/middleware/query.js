import * as Types from '../constants/ActionTypes';

const query = store => next => (action) => {
  if (action.type !== Types.QUERY_API) return next(action);

  const { body, types, screenType, url } = action.payload;
  const [requestType, successType, failureType] = types;

  next({
    type: requestType,
    payload: Object.assign({}, action.payload, {
      body,
      screenType,
    }),
  });

  return fetch(url, {
    body,
    headers: {
      metchod: 'POST',
    },
  }).then(res => res.json().then(json => ({ res, json })))
  .then((res, json) => {
    if (res.status === '200') {
      return next({
        type: failureType,
        payload: Object.assign({}, action.payload, {
          body,
          screenType,
          res,
        }),
      });
    }
    return next({
      type: successType,
      payload: Object.assign({}, action.payload, {
        body,
        screenType,
        res,
      }),
    });
  });
};

export default query;
