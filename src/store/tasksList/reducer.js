import { types } from './types';

export function tasks(state = {}, action) {
  switch (action.type) {
    case types.ADD_TASK_RES:
      return {
        count: (state.count += 1),
        data: [...state.data, action.payload],
      };
    case types.GET_TASKS_RESPONSE:
      return {
        ...state,
        ...action.payload,
      };
    case types.GET_TASK_BY_ID_RES:
      return { ...state, ...action.payload };

    case types.GET_COMPLETED_TASK_RES:
      return {
        ...state,
        ...action.payload,
      };
    case types.GET_TASK_BY_PAGINATION_RES:
      return {
        ...state,
        ...action.payload,
      };
    case types.UPDATE_TASK_BY_ID_RES:
      return {
        ...state,
        data: action.payload,
      };
    case types.DELETE_TASK_BY_ID_RES:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
