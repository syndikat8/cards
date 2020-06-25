import React from "react";

type OnPropsType = {
        title: string
}

const Login: React.FC<OnPropsType> = ({title}) => {

    return (
        <div>
                {title}
        </div>
    )

}

export default Login;