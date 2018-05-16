// import fetch from 'unfetch';
import * as Types from '../constants/ActionTypes';

const chat = store => next => (action) => {
  if (action.type !== Types.CHAT_API) return next(action);

  const { body, types, screenType } = action.payload;

  const [requestType, successType, failureType] = types;

  next({
    type: requestType,
    payload: Object.assign({}, action.payload, {
      body,
      screenType,
    }),
  });

  console.log('chat middleware');

  // const aaa = 'Bearer ya29.Glu6BTsnKLLlAEArqAr973yoj_5-lhNys1Ox2_a5tWj6SCAFWlMcWdu9HV4' +
  // 'UhH7FJp-gdKn02As1akHw1G4Z8kBFBw_wnWvb6EcJ5y2to3g_I9iBBPZ-iPQF_z_z';

  // const fetch = window.fetch.bind(window);

  // const params = {
  //   message: 'hello',
  // };

  return fetch('https://us-central1-weather-e382e.cloudfunctions.net/helloWorld', {
    method: 'GET',
    // body: JSON.stringify(params),
    mode: 'cors',
    // credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  }).then((res) => {
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
    return res.json;
  })
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

export default chat;
