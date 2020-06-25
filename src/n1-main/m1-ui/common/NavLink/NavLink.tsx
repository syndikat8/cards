import React from "react";
import {NavLink} from "react-router-dom";
import styles from './NavLink.module.css';
import {footer, header, profile} from "../../routes/routes";

const NavigationLink = () => {

    return (
        <div>
            <NavLink to={header} className={styles.navLink}>Header</NavLink>
            <NavLink to={profile} className={styles.navLink}>Profile</NavLink>
            <NavLink to={footer} className={styles.navLink}>Footer</NavLink>
        </div>
    )
}

export default NavigationLink;
