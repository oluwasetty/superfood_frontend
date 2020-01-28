import axios from 'axios';

/** Default config for axios instance */
let config = {
    baseURL: 'http://laravel.test/api/',
    // timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        // anything you want to add to the headers
    }
};

/** Creating the instance for axios */
const httpClient = axios.create(config);

alert('start loading');

/** Auth token interceptors */
const authInterceptor = config => {
    /** TODO: Add auth token */
    const getAuthToken = () => localStorage.getItem('token');
    config.headers['Authorization'] = getAuthToken();
    return config;
};

/** logger interceptors */
const loggerInterceptor = config => {
    /** TODO */
    return config;
}

/** Adding the request interceptors */
httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);

/** Adding the response interceptors */
httpClient.interceptors.response.use(
    response => {
        /** TODO: Add any response interceptors */
        return response;
    },
    error => {
        /** TODO: Do something with response error */
        return Promise.reject(error);
    }
);

export default httpClient;