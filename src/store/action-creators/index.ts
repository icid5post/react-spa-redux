import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';
import * as AuthActionCreators from './auth';


const combinedActions = {
    ...UserActionCreators,
    ...TodoActionCreators,
    ...AuthActionCreators
}

export default combinedActions;

