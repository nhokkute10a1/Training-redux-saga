import axiosService from '../common/axiosService';
import { API_ENDPOINT } from '../constants/constanst';

const url = 'task';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
