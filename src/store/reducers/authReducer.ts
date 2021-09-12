import {AuthAction, AuthActionsTypes, AuthStates} from "../../types/auth";
import {IAuthUser} from "../../models/AuthUser";

const initialState: AuthStates = {
    user: {} as IAuthUser,
    loading: false,
    isAuthorized: null,
    error: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthStates => {
    switch (action.type) {
        case AuthActionsTypes.LOGIN_USER:
            return {
                ...state,
                loading: true,
            }
        case AuthActionsTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthorized: true,
                loading: false,
            }
        case AuthActionsTypes.LOGIN_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        // Check current user

        case AuthActionsTypes.CHECK_USER:
            return {
                ...state,
                loading: true,
            }
        case AuthActionsTypes.CHECK_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthorized: true,
                loading: false,
            }
        case AuthActionsTypes.CHECK_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case AuthActionsTypes.LOGOUT_USER:
            return {
                ...state,
                loading: true,
            }
        case AuthActionsTypes.LOGOUT_USER_SUCCESS:
            return {
                ...state,
                user: initialState.user,
                isAuthorized: false,
                loading: false,
            }
        case AuthActionsTypes.LOGOUT_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        default:
            return state
    }
}


