import React from "react";

type OnPropsType = {
    title: string
}

const Header: React.FC<OnPropsType> = ({title}) => {

    return (
        <div>
            {title}
        </div>
    )

}

export default Header;