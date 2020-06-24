import React from "react";

type OnPropsType = {
        title: string
}

const Footer: React.FC<OnPropsType> = ({title}) => {

    return (
        <div>
                {title}
        </div>
    )

}

export default Footer;