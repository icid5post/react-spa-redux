import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../store/action-creators/'
import {useState} from "react";

export const useActions = () => {
    const dispatch = useDispatch();
    const [combinedActions] = useState(bindActionCreators(ActionCreators, dispatch))
    return combinedActions;
}
