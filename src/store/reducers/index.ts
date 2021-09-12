import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";
import {authReducer} from "./authReducer";

export const rootReducer = combineReducers({
    users: userReducer,
    todo: todoReducer,
    auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>;
