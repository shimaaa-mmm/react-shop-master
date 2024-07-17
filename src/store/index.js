import {configureStore, createSlice} from "@reduxjs/toolkit";

const SESSION_EXPIRATION_MS = 30 * 24 * 60 * 60 * 1000; // 1 month in milliseconds

const saveToSessionStorage = (key, value) => {
    try {
        const data = {
            value,
            timestamp: Date.now()
        };
        sessionStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error("Could not save to sessionStorage", e);
    }
};
const removeFromSessionStorage = (key) => {
    try {
        sessionStorage.removeItem(key);
    } catch (e) {
        console.error("Could not remove from sessionStorage", e);
    }
};
const isSessionExpired = (timestamp) => {
    return Date.now() - timestamp > SESSION_EXPIRATION_MS;
};
const initializeState = () => {
    const userData = sessionStorage.getItem('user');
    if (userData) {
        try {
            const {value, timestamp} = JSON.parse(userData);
            if (!isSessionExpired(timestamp)) {
                return value;
            } else {
                removeFromSessionStorage('user');
                removeFromSessionStorage('token');
            }
        } catch (e) {
            console.error("Error parsing session data", e);
            removeFromSessionStorage('user');
            removeFromSessionStorage('token');
        }
    }
    return {
        first_name: '',
        last_name: '',
        mobile: '',
        token: '',
    };
};

const userSlice = createSlice({
    name: 'user',
    initialState: initializeState(),
    reducers: {
        login: (state, action) => {
            const {first_name, last_name, mobile, token} = action.payload;
            state.first_name = first_name;
            state.last_name = last_name;
            state.mobile = mobile;
            state.token = token;

            saveToSessionStorage('token', token);
            saveToSessionStorage('user', {first_name, last_name, mobile, token});
        },
        logout: (state) => {
            state.first_name = '';
            state.last_name = '';
            state.mobile = '';
            state.token = '';

            removeFromSessionStorage('token');
            removeFromSessionStorage('user');
        }
    }
});
export const {login, logout} = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
});
export const selectToken = (state) => state.user.token;