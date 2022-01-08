import { LOGIN, LOGOUT, SYNCCOOKIES, STORE_ONLY_USER } from '../actions/auth';

import Cookies from 'js-cookie';

// const token = Cookies.get('token'), user = Cookies.get('user'), userType = Cookies.get('userType');

const initialState = {
    loggedIn: null,
    user: null,
    token: null,
    userType: null
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            const {user, token, user_type: userType} = action.data;
            return {
                ...state,
                user,
                userType,
                token,
                loggedIn: true
            }
        case SYNCCOOKIES:
            const {user: userData, token: userToken, user_type, loggedIn} = action.data;
            return {
                ...state,
                user: userData,
                userType: user_type,
                token: userToken,
                loggedIn
            }
        case STORE_ONLY_USER:
            return {
                ...state,
                user: action.user,
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
                loggedIn: false
            }

        default:
            return state;
    }
};

export default auth;
