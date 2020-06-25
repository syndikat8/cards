import React from "react";
import Header from "./Header/Header";
import Button from "./common/Button/Button";
import Input from "./common/Input/Input";
import NavigationLink from "./common/NavLink/NavLink";
import {Route} from "react-router-dom";
import Footer from "./Footer/Footer";
import Profile from "./Middle/Profile";
import {footer, header, profile} from "./routes/routes";

type OnPropsType = {}

const Main: React.FC<OnPropsType> = () => {

    return (
        <div>
            <Route path={header} render={() => <Header title="header"/>}/>
            <Route path={profile} render={() => <Profile title="profile"/>}/>
            <Route path={footer} render={() => <Footer title="footer"/>}/>
            <Button name="bet"/>
            <Input/>
            <NavigationLink/>
        </div>
    )
}

export default Main;
