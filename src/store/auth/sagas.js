import { call, takeLatest, put } from '@redux-saga/core/effects';
import * as API from './api';
import { types as TYPES } from './types';
import { getTokenRes } from './actions';

export let auth = false;

function* logIn({ payload }) {
  try {
    yield call(API.logIn, payload);
    auth = true;
  } catch (err) {
    console.error(err);
  }
}
function* signUp({ payload }) {
  try {
    yield call(API.signUp, payload);
  } catch (err) {
    console.error(err);
  }
}

function* deleteUser({ payload }) {
  try {
    yield call(API.deleteUser, payload);
  } catch (err) {
    console.error(err);
  }
}
function* updateUser({ payload }) {
  try {
    yield call(API.updateUser, payload);
  } catch (err) {
    console.error(err);
  }
}
function* logOut({ payload }) {
  try {
    yield call(API.logOut, payload);
    auth = false;
  } catch (err) {
    console.error(err);
  }
}
function* fetchToken() {
  try {
    const res = yield call(API.getToken);
    const data = res;
    yield put(getTokenRes(data));
  } catch (err) {
    console.error(err);
  }
}
export function* authSagas() {
  yield takeLatest(TYPES.LOGIN_REQUEST, logIn);
  yield takeLatest(TYPES.SIGNUP_REQUEST, signUp);
  yield takeLatest(TYPES.DELETE_REQUEST, deleteUser);
  yield takeLatest(TYPES.UPDATE_USER_REQUEST, updateUser);
  yield takeLatest(TYPES.LOGOUT_REQUEST, logOut);
  yield takeLatest(TYPES.GET_TOKEN_RES, fetchToken);
}
