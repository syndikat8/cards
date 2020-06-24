import React from "react";
import styles from './Input.module.css';

type OnPropsType = {

}

const Input: React.FC<OnPropsType> = () => {

    return <input className={styles.input}/>
}

export default Input;
