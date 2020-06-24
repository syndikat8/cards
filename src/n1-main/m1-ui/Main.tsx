import React from "react";
import Header from "./Header/Header";
import Button from "./common/Button/Button";
import Input from "./common/Input/Input";
import NavigationLink from "./common/NavLink/NavLink";
import {Route} from "react-router-dom";
import Footer from "./Footer/Footer";
import Middle from "./Middle/Middle";
import {footer, header, middle} from "./routes/routes";

type OnPropsType = {}

const Main: React.FC<OnPropsType> = () => {

    return (
        <div>
            <Route path={header} render={() => <Header title="header"/>}/>
            <Route path={middle} render={() => <Middle title="middle"/>}/>
            <Route path={footer} render={() => <Footer title="footer"/>}/>
            <Button name="bet"/>
            <Input/>
            <NavigationLink/>
        </div>
    )
}

export default Main;
