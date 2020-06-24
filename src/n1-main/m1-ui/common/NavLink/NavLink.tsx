import React from "react";
import {NavLink} from "react-router-dom";
import styles from './NavLink.module.css';

const NavigationLink = () => {

    return (
        <NavLink
            to="/#"
            className={styles.navLink}
        >Ссылка для перехода</NavLink>
    )
}

export default NavigationLink;
