import { call, takeLatest, put } from '@redux-saga/core/effects';
import * as API from './api';
import {
  getTaskListRes,
  getTaskPaginationRes,
  TaskByIDRes,
  updateTaskRes,
  updateTask,
  deleteTaskRes,
  addTask,
  addTaskRes,
} from './actions';
import { types as TYPES } from './types';

function* taskList() {
  try {
    const tasks = yield call(API.taskListApi);
    const { data } = tasks;
    yield put(getTaskListRes(data));
  } catch (err) {
    console.error(err);
  }
}
function* addNewTask({ payload }) {
  try {
    const res = yield call(API.addTaskApi, payload);
    const { data } = res;
    yield put(addTaskRes(data.data));
  } catch (err) {
    console.error(err);
  }
}
function* getTaskById({ payload }) {
  try {
    const tasks = yield call(API.getTaskById);
    const { data } = tasks;
    yield put(TaskByIDRes(data));
  } catch (err) {
    console.error(err);
  }
}

function* deleteTaskSaga({ id, filtered }) {
  try {
    console.log(id, 'delete task', filtered);
    const res = yield call(API.fetchDeleteTask, id);
    yield put(deleteTaskRes(filtered));
  } catch (err) {
    console.error(err);
  }
}
function* updateTaskSaga({ payload, id }) {
  try {
    console.log(payload, id);
    const tasks = yield call(API.fetchUpdateTask, payload, id);
    const { data } = tasks;
    yield put(updateTaskRes(data));
  } catch (err) {
    console.error(err);
  }
}
function* getTaskByPagination({ limit, skip }) {
  try {
    const tasks = yield call(API.fetchGetTaskByPagination, limit, skip);
    const { data } = tasks;
    yield put(getTaskPaginationRes(data));
  } catch (err) {
    console.error(err);
  }
}
function* getTaskByCompelted({ payload }) {
  try {
    yield call(API.getTaskByCompelted, payload);
  } catch (err) {
    console.error(err);
  }
}
export function* taskSaga() {
  yield takeLatest(TYPES.GET_TASKS_REQUEST, taskList);
  yield takeLatest(TYPES.GET_TASK_BY_ID, getTaskById);
  yield takeLatest(TYPES.GET_COMPLETED_TASK, getTaskByCompelted);
  yield takeLatest(TYPES.GET_TASK_BY_PAGINATION, getTaskByPagination);
  yield takeLatest(TYPES.UPDATE_TASK_BY_ID, updateTaskSaga);
  yield takeLatest(TYPES.DELETE_TASK_BY_ID, deleteTaskSaga);
  yield takeLatest(TYPES.ADD_TASK_REQUEST, addNewTask);
}
