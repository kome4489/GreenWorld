import * as Types from '../constants/ActionTypes';

const query = store => next => (action) => {
  if (action.type !== Types.QUERY_API) return next(action);

  const { body, types, Methods, url } = action.payload;
  const [requestType, successType, failureType] = types;

  next({
    type: requestType,
    payload: Object.assign({}, action.payload, {
      body,
    }),
  });

  const apiParams = {
    method: Methods,
    credentials: 'cors',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };

  if (Methods === 'POST') {
    apiParams.body = JSON.stringify(body);
  }

  return fetch(url, apiParams)
  .then((response) => {
    console.log(response);
    return response.json()
    .then((res) => {
      next({
        type: successType,
        payload: {
          response: res,
          body,
        },
      });
    });
  }).catch((err) => {
    next({
      type: failureType,
      payload: {
        message: err,
      },
    });
  });
};

export default query;
