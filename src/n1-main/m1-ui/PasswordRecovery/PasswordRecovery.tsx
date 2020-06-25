import React from "react";

type OnPropsType = {
        title: string
}

const PasswordRecovery: React.FC<OnPropsType> = ({title}) => {

    return (
        <div>
                {title}
        </div>
    )

}

export default PasswordRecovery;