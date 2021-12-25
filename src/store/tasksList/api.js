import axiosInstance from '../../utils/axiosInstance';

export const addTaskApi = async payload => {
  return await axiosInstance.post('/task', payload);
};
export const taskListApi = async () => {
  return await axiosInstance.get('/task');
};
export const getTaskById = async id => {
  return await axiosInstance.get(`/task/${id}`);
};

export const getTaskByCompelted = async () => {
  return await axiosInstance.get('/task?completed=true');
};
export const fetchGetTaskByPagination = async (limit, skip) => {
  return await axiosInstance.get(`/task?limit=${limit}&skip=${skip}`, {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
};
export const fetchUpdateTask = async (payload, id) => {
  console.log(id);
  return await axiosInstance.put(`/task/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
};
export const fetchDeleteTask = async id => {
  return await axiosInstance.delete(`/task/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
};
