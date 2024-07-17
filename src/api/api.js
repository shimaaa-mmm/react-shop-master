import axios from 'axios';
// import {selectToken, store} from "../store/index.js";

const api = axios.create({
    baseURL: 'https://api.vanguard-store.ir/api',  // Replace with your API base URL
    timeout: 10000,  // Timeout in milliseconds (10 seconds in this example)
});

// You can also add interceptors here if needed
api.interceptors.request.use(
    (config) => {
        // const state = store.getState()
        // const token = selectToken(state)
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IjE0NHw4RDdpMlFkRVI1R0hBZFlpU3BIdUxJeUdmUGQ5OXI2TDA1dVg5SHVJZTEwYTMxNGEiLCJ1c2VyIjp7Im5hbWUiOiJcdTA2MzlcdTA2NDRcdTA2Y2MiLCJtb2JpbGUiOiIwOTM1MzcyMjM1MCIsImxhc3RfbmFtZSI6Ilx1MDY0Nlx1MDYyN1x1MDYzNVx1MDYzMVx1MDZjY1x1MDYyN1x1MDY0NiIsImNyZWF0ZWRfYXQiOnsic2hfZGF0YSI6IjE0MDMvMDIvMDEiLCJhZF9kYXRlIjoiMjAyNC8wNC8yMCIsInllYXJOYW1lIjoxNDAzLCJtb250aE5hbWUiOiJcdTA2MjdcdTA2MzFcdTA2MmZcdTA2Y2NcdTA2MjhcdTA2NDdcdTA2MzRcdTA2MmEiLCJkYXlOYW1lIjoiXHUwNjM0XHUwNjQ2XHUwNjI4XHUwNjQ3IiwiaXNvIjoiMTQwMy0wMi0wMVQwMToxMjo0MSswMzozMCIsIm1pbnV0ZXNQYXNzZWQiOiIyIFx1MDY0NVx1MDYyN1x1MDY0NyBcdTA2N2VcdTA2Y2NcdTA2MzQifSwiYXV0aGVudGljYXRlZCI6ZmFsc2UsImVtYWlsIjoibmFzZXJpYW5hbGlAZ21haWwuY29tIn19.OqdpZv6Y9kqh3SPGsAXCqzjKeVCVnMOBjYxBVDGh_UE"
        if (token)
            config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Handle response data if needed
        return response;
    },
    (error) => {
        // Handle response error
        return Promise.reject(error);
    }
);

export default api;
