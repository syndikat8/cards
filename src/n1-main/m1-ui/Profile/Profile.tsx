import React from "react";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";

type OnPropsType = {
    title: string
}

const Profile: React.FC<OnPropsType> = ({title}) => {

    return (
        <div>
            {title}
            <Button name="bet"/>
            <Input/>
        </div>
    )

}

export default Profile;