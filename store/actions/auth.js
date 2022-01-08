import Cookies from 'js-cookie';
import {NotificationManager} from 'react-notifications';

import axiosInstance from '../../config/axios';


export const STORE_AUTH = 'STORE_AUTH';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SYNCCOOKIES = 'SYNCCOOKIES';


export const loginAsync = (data, userType) => {
    let newData = data;

    return async dispatch => {
        try {
            const {data: response} = await axiosInstance.post(`${userType === 'user' ? 'tenant' : 'agent'}/login`, newData);
            dispatch(storeAuth(response.data));
            NotificationManager.success(response.message, '', 5000);
        } catch (error) {
            NotificationManager.error(error.response.data.message, '', 5000);
            return 'error';
        }
    }
}


export const storeAuth = data => {
    Cookies.set('token', data.authorization.access_token, { secure: true });
    Cookies.set('userType', data.user_type);
    if (data.user_type === 'tenant') {
        Cookies.set('user', JSON.stringify(data.tenant), { secure: true });
        data['user'] = data.tenant;
    } else {
        Cookies.set('user', JSON.stringify(data.agent), { secure: true });
        data['user'] = data.agent;
    }
    data['token'] = data.authorization.access_token;

    return {
        type: 'LOGIN',
        data
    }
};

export const syncCookiesToStore = data => ({type: SYNCCOOKIES, data});


export const logout = () => {
    Cookies.remove('token');
    Cookies.remove('user');
    Cookies.remove('userType');

    return {
        type: LOGOUT
    }
}
