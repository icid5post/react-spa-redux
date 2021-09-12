import React, {FC, useState} from 'react';
import {useActions} from "../hooks/useActions";
import {Redirect, useHistory} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";


const LoginForm: FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {login} = useActions();
    const history  = useHistory()
    const {isAuthorized} = useTypedSelector(state=>state.auth)

    const loginUser = () => {
        login(email, password)
        history.push('/users')
    }

    if(isAuthorized){
        return  <Redirect to='/users'/>
    }

    console.log(isAuthorized, 'isAuthorized')

    return (
        <div>
            <input
                onChange={e=>setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                name="email"
            />
            <input
                onChange={e=>setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                name="password"
            />
            <button onClick={loginUser}>
                Login
            </button>

        </div>
    );
};

export default LoginForm;
