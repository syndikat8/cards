import React from "react";
import styles from './Button.module.css';

type OnPropsType = {
    name: string
}

const Button: React.FC<OnPropsType> = ({name}) => {

    return <button className={styles.button}>{name}</button>

}

export default Button;
