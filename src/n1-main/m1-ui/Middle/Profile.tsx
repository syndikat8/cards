import React from "react";

type OnPropsType = {
    title: string
}

const Profile: React.FC<OnPropsType> = ({title}) => {

    return (
        <div>
            {title}
        </div>
    )

}

export default Profile;