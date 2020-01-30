import Vue from 'vue'
import axios from 'axios';
import VueSweetalert from "vue-sweetalert2";
Vue.use(VueSweetalert);

/** Default config for axios instance */
let config = {
    baseURL: 'http://superfood.test/api/',
    // timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        // anything you want to add to the headers
    }
};

/** Creating the instance for axios */
const httpClient = axios.create(config);

/** Auth token interceptors */
const authInterceptor = config => {
    /** TODO: Add auth token */
    const getAuthToken = () => localStorage.getItem('token');
    config.headers['Authorization'] = getAuthToken();
    Vue.prototype.$swal({
        title: "Loading...",
        text: "Please wait",
        imageUrl: "/img/preloader.gif",
        imageWidth: 75,
        imageHeight: 75,
        showConfirmButton: false,
        allowOutsideClick: false
    });
    return config;
};

/** logger interceptors */
const loggerInterceptor = config => {
    /** TODO */
    return config;
}

/** Adding the request interceptors */
httpClient.interceptors.request.use(authInterceptor, (error) => {
    // Do something with request error
    return Promise.reject(error);
});
httpClient.interceptors.request.use(loggerInterceptor);

/** Adding the response interceptors */
httpClient.interceptors.response.use(
    response => {
        /** TODO: Add any response interceptors */
        Vue.prototype.$swal.close();
        return response;
    },
    error => {
        /** TODO: Do something with response error */
        Vue.prototype.$swal.close();
        console.log(error);
        return Promise.reject(error);
    }
);
export default httpClient;