import { types } from './types';

export const getTaskList = () => ({
  type: types.GET_TASKS_REQUEST,
});
export const getTaskListRes = payload => ({
  type: types.GET_TASKS_RESPONSE,
  payload,
});
export const TaskByID = () => ({
  type: types.GET_TASK_BY_ID,
});
export const TaskByIDRes = payload => ({
  type: types.GET_TASK_BY_ID_RES,
  payload,
});

export const addTask = payload => ({
  type: types.ADD_TASK_REQUEST,
  payload,
});

export const addTaskRes = payload => ({
  type: types.ADD_TASK_RES,
  payload,
});

export const getCompeltedTasks = () => ({
  type: types.GET_COMPLETED_TASK,
});
export const getCompeltedTasksRes = payload => ({
  type: types.GET_COMPLETED_TASK_RES,
  payload,
});
export const deleteTask = (id, payload) => ({
  type: types.DELETE_TASK_BY_ID,
  id,
});
export const deleteTaskRes = payload => ({
  type: types.DELETE_TASK_BY_ID_RES,
  payload,
});
export const updateTask = (payload, id) => ({
  type: types.UPDATE_TASK_BY_ID,
  payload,
  id,
});
export const updateTaskRes = payload => ({
  type: types.UPDATE_TASK_BY_ID_RES,
  payload,
});
export const getTaskPagination = (limit, skip) => ({
  type: types.GET_TASK_BY_PAGINATION,
  limit,
  skip,
});
export const getTaskPaginationRes = payload => ({
  type: types.GET_TASK_BY_PAGINATION_RES,
  payload,
});
