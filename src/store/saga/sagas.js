import { all } from 'redux-saga/effects';
import { authSagas } from '../auth/sagas';
import { taskSaga } from '../tasksList/sagas';

export function* rootSaga() {
  yield all([authSagas(), taskSaga()]);
}
