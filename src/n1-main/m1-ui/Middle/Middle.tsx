import React from "react";

type OnPropsType = {
    title: string
}

const Middle: React.FC<OnPropsType> = ({title}) => {

    return (
        <div>
            {title}
        </div>
    )

}

export default Middle;