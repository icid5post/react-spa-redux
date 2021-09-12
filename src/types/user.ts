import {IUser} from "../models/User";

export interface UserStates {
    users: IUser[];
    loading: boolean;
    error: null | string;
}

export enum UsersActionsTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface FetchUsersAction {
    type: UsersActionsTypes.FETCH_USERS;
}

export interface FetchUsersSuccess {
    type: UsersActionsTypes.FETCH_USERS_SUCCESS;
    payload: any[]
}

export interface FetchUsersError {
    type: UsersActionsTypes.FETCH_USERS_ERROR;
    payload: string
}




export type UsersAction = FetchUsersAction
    | FetchUsersSuccess
    | FetchUsersError
