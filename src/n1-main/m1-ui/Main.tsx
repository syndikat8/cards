import React from "react";
import Header from "./Header/Header";
import {Route} from "react-router-dom";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import {login, passwordRecovery, profile, register} from "./routes/routes";
import Register from "./Register/Register";
import PasswordRecovery from "./PasswordRecovery/PasswordRecovery";

type OnPropsType = {}

const Main: React.FC<OnPropsType> = () => {

    return (
        <div>
            <Header title="header"/>
            <div>
                <Route path={profile} render={() => <Profile title="profile"/>}/>
                <Route path={login} render={() => <Login title="login"/>}/>
                <Route path={register} render={() => <Register title="registration"/>}/>
                <Route path={passwordRecovery} render={() => <PasswordRecovery title="passwordRecovery"/>}/>
            </div>
        </div>
    )
}

export default Main;
