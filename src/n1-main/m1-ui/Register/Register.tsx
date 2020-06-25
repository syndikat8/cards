import React from "react";

type OnPropsType = {
        title: string
}

const Register: React.FC<OnPropsType> = ({title}) => {

    return (
        <div>
                {title}
        </div>
    )

}

export default Register;