import { types } from './types';

export function auth(state = {}, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        ...action.payload,
      };
    case types.GET_TOKEN_RES:
      return {
        ...state,
        ...action.payload,
      };
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        ...action.payload,
      };
    case types.DELETE_REQUEST:
      return { ...state, ...action.payload };

    case types.UPDATE_USER_REQUEST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
