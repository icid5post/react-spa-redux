import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {useActions} from "./hooks/useActions";
import PrivateRoute from "./Hoc/PrivateRoute";

type Props = {

};

const LoginForm = lazy(() => import('./components/LoginForm'));
const Users = lazy(() => import('./pages/Users'));

const App = (props: Props) => {

    const {logout} = useActions();

    const logoutUser = () => {
        logout()
    }

    return (
        <>
            <Router>
                <div style={{display: 'flex'}}>
                    <div style={{padding: 10}}>
                        <Link to="/">Home</Link>
                    </div>
                    <div style={{padding: 10}}>
                        <Link to="/users">users</Link>
                    </div>
                    <div style={{padding: 10}}>
                        <button onClick={logoutUser}>Logout</button>
                    </div>
                </div>

                <Suspense fallback={<div>Загрузка...</div>}>
                    <Switch>
                        <Route exact path="/" component={LoginForm}/>
                        <PrivateRoute exact path="/users" component={Users}/>
                    </Switch>
                </Suspense>
            </Router>
        </>

    );
};

export default App;
