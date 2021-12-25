import axiosInstance from '../../utils/axiosInstance';

export const logIn = async payload => {
  return await axiosInstance.post('/user/login', payload);
};

export const signUp = async payload => {
  return await axiosInstance.post('/user/register', payload);
};

export const logOut = async () => {
  return await axiosInstance.post('/user/logout');
};

export const getToken = async () => {
  return await axiosInstance.get('/user/me');
};

export const deleteUser = async payload => {
  return await axiosInstance.delete('/user/me');
};

export const updateUser = async payload => {
  return await axiosInstance.put('/user/me', payload);
};
