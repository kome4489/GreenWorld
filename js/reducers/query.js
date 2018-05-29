import { handleActions } from 'redux-actions';
import { DATAS_SUCESS, SAVE_CHANGE, SWITCH, ON_CHANGE, QUERY_SUCCESS, CURD_SUCCESS } from '../constants/ActionTypes';

const initialState = {
  aaa: null,
  results: {
    datas: [],
  },
};

const query = handleActions({
  [ON_CHANGE]: (state, action) => {
    let stateNew = state;
    switch (action.payload.type) {
      case 'familyName': {
        stateNew = Object.assign({}, state, {
          familyName: action.payload.value,
        });
        break;
      }
      case 'formName': {
        stateNew = Object.assign({}, state, {
          formName: action.payload.value,
        });
        break;
      }
      case 'chat': {
        stateNew = Object.assign({}, state, {
          chat: action.payload.value,
        });
        break;
      }
      default:
        break;
    }

    return stateNew;
  },

  [DATAS_SUCESS]: (state, action) => Object.assign({}, state, {
    aaa: '2222',
  }),

  [SAVE_CHANGE]: (state, action) => Object.assign({}, state, {
    nextList: [action.payload.input1, action.payload.input2],
    prevList: state.nextList,
  }),

  [SWITCH]: (state, action) => Object.assign({}, state, {
    switchValue: action.payload.value,
  }),

  [QUERY_SUCCESS]: (state, action) => {
    const datas = action.payload.response.data;
    return Object.assign({}, state, {
      results: Object.assign({}, state.results, {
        datas,
      }),
    });
  },

  [CURD_SUCCESS]: (state, action) => {
    const messages = action.payload.response.message;
    return Object.assign({}, state, {
      results: Object.assign({}, state.results, {
        messages,
        message: '登録成功',
      }),
    });
  },

}, initialState);

export default query;
