import React from "react";
import Header from "./Header/Header";
import NavigationLink from "./common/NavLink/NavLink";
import {Route} from "react-router-dom";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import {header, login, passwordRecovery, profile, register} from "./routes/routes";
import Register from "./Register/Register";
import PasswordRecovery from "./PasswordRecovery/PasswordRecovery";

type OnPropsType = {}

const Main: React.FC<OnPropsType> = () => {

    return (
        <div>
            <NavigationLink/>
            <Route path={login} render={() => <Login title="login"/>}/>
            <Route path={register} render={() => <Register title="registration"/>}/>
            <Route path={passwordRecovery} render={() => <PasswordRecovery title="passwordRecovery"/>}/>
            <Route path={header} render={() => <Header title="header"/>}/>
            <Route path={profile} render={() => <Profile title="profile"/>}/>
        </div>
    )
}

export default Main;
