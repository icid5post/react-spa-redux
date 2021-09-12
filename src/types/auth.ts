import {IAuthUser} from "../models/AuthUser";

export interface AuthStates {
    user: IAuthUser;
    loading: boolean;
    isAuthorized: null |boolean;
    error: null | string;
}

export enum AuthActionsTypes {
    FETCH_USER = 'FETCH_USERS',
    FETCH_USER_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USERS_ERROR',
    // Login
    LOGIN_USER = 'LOGIN_USER',
    LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',
    // Logout
    LOGOUT_USER = 'LOGOUT_USER',
    LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS',
    LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR',
    // Check
    CHECK_USER = 'CHECK_USER',
    CHECK_USER_SUCCESS = 'CHECK_USER_SUCCESS',
    CHECK_USER_ERROR = 'CHECK_USER_ERROR'
}

export interface FetchUserAction {
    type: AuthActionsTypes.FETCH_USER;
}

export interface FetchUserSuccess {
    type: AuthActionsTypes.FETCH_USER_SUCCESS;
    payload: any[]
}

export interface FetchUserError {
    type: AuthActionsTypes.FETCH_USER_ERROR;
    payload: string
}

// Login user

export interface LoginUser {
    type: AuthActionsTypes.LOGIN_USER
}

export interface LoginUserSuccess {
    type: AuthActionsTypes.LOGIN_USER_SUCCESS,
    payload: IAuthUser
}

export interface LoginUserError {
    type: AuthActionsTypes.LOGIN_USER_ERROR,
    payload: string
}

// Logout user

export interface LogoutUser {
    type: AuthActionsTypes.LOGOUT_USER
}

export interface LogoutUserSuccess {
    type: AuthActionsTypes.LOGOUT_USER_SUCCESS,
}

export interface LogoutUserError {
    type: AuthActionsTypes.LOGOUT_USER_ERROR,
    payload: string
}

// Check user

export interface CheckUser {
    type: AuthActionsTypes.CHECK_USER
}

export interface CheckUserSuccess {
    type: AuthActionsTypes.CHECK_USER_SUCCESS,
    payload: IAuthUser
}

export interface CheckUserError {
    type: AuthActionsTypes.CHECK_USER_ERROR,
    payload: string
}



export type AuthAction = FetchUserAction
    | FetchUserSuccess
    | FetchUserError

    | LoginUser
    | LoginUserSuccess
    | LoginUserError

    | LogoutUser
    | LogoutUserSuccess
    | LogoutUserError

    | CheckUser
    | CheckUserSuccess
    | CheckUserError
