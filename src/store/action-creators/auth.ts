import {Dispatch} from "redux";
import $api from "../../http";
import {AuthResponse} from "../../models/response/AuthResponse";
import {AuthAction, AuthActionsTypes} from "../../types/auth";
import axios from "axios";
import API_URL from "../../http/api";


export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionsTypes.LOGIN_USER})
            const response = await $api.post<AuthResponse>('/login', {email, password});
            localStorage.setItem('token', response.data.accessToken);
            dispatch({type: AuthActionsTypes.LOGIN_USER_SUCCESS, payload: response.data.user})
        }catch (e){
            dispatch({type: AuthActionsTypes.LOGIN_USER_ERROR, payload: 'Ошибка авторизации'})
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionsTypes.LOGOUT_USER})
            await $api.post('/logout');
            localStorage.removeItem('token');
            dispatch({type: AuthActionsTypes.LOGOUT_USER_SUCCESS})
        }catch (e){
            dispatch({type: AuthActionsTypes.LOGOUT_USER_ERROR, payload: 'Ошибка авторизации'})
        }
    }
}

export const checkUser = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {

            dispatch({type: AuthActionsTypes.CHECK_USER})

            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
                withCredentials: true
            });

            console.log(response, 'response-rk')

            localStorage.setItem('token', response.data.accessToken);

            dispatch({type: AuthActionsTypes.CHECK_USER_SUCCESS, payload: response.data.user})

        }catch (e){
            dispatch({type: AuthActionsTypes.CHECK_USER_ERROR, payload: 'Ошибка при првоерке токена '})
        }
    }
}
