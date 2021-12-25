import { types } from './types';

export const loginRequest = payload => ({
  type: types.LOGIN_REQUEST,
  payload,
});
export const getTokenReq = () => ({
  type: types.GET_TOKEN_REQ,
});
export const getTokenRes = payload => ({
  type: types.GET_TOKEN_RES,
  payload,
});
export const signUpRequest = payload => ({
  type: types.SIGNUP_REQUEST,
  payload,
});

export const logOutRequest = payload => ({
  type: types.LOGOUT_REQUEST,
  payload,
});
export const deleteUser = payload => ({
  type: types.DELETE_REQUEST,
  payload,
});
export const updateUser = payload => ({
  type: types.UPDATE_USER_REQUEST,
  payload,
});
