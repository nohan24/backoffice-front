import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.clear();
            console.log(error.response)
            window.location.reload();
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;