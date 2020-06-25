import React from "react";
import NavigationLink from "../common/NavLink/NavLink";

type OnPropsType = {
    title: string
}

const Header: React.FC<OnPropsType> = ({title}) => {

    return (
        <div>
            <NavigationLink/>
            {title}
        </div>
    )

}

export default Header;