import axios from 'axios';
import { BASE_URL, TIMEOUT } from '@constants/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

const handleException = () => async (error: any) => {
  // HTTP STATUS 예외 처리
  return Promise.reject(error);
};

export const axiosInitializer = async () => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    handleException(),
  );
};

export default axiosInstance;
