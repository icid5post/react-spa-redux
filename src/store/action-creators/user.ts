import {UsersAction, UsersActionsTypes} from "../../types/user";
import {Dispatch} from "redux";
import $api from "../../http";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UsersActionsTypes.FETCH_USERS});
            const response = await $api.get('/users');
            dispatch({type: UsersActionsTypes.FETCH_USERS_SUCCESS, payload: response.data});
        }catch (e){
            dispatch({type: UsersActionsTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке Юзеров'})
        }
    }
}
