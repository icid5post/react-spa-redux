import React, {useEffect} from 'react';
import {Redirect, Route, useHistory} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {RouteProps} from "react-router";

const PrivateRoute = ({ component, ...rest }: RouteProps) =>{

    const { loading, isAuthorized} = useTypedSelector(state => state.auth)
    const {checkUser} = useActions();
    const history  = useHistory()

    useEffect(()=> {

        if(!localStorage.getItem('token')){
            history.push('/')
            return
        }

        if(!isAuthorized) {
            checkUser();
        }

    }, [checkUser])


    if(loading){
        return <div style={{color: 'red'}}>Loading... user</div>
    }

    if(!isAuthorized && isAuthorized !==null && !loading){
       return <Redirect to="/"/>
    }

    return (
        <>
            <Route {...rest} component={component}/>
        </>

    )
}

export default PrivateRoute;
