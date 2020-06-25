import React from "react";
import {NavLink} from "react-router-dom";
import styles from './NavLink.module.css';
import {login, header, profile, register, passwordRecovery} from "../../routes/routes";

const NavigationLink = () => {

    return (
        <div>
            <NavLink to={login} className={styles.navLink}>Login</NavLink>
            <NavLink to={register} className={styles.navLink}>Register</NavLink>
            <NavLink to={passwordRecovery} className={styles.navLink}>PasswordRecovery</NavLink>
            <NavLink to={header} className={styles.navLink}>Header</NavLink>
            <NavLink to={profile} className={styles.navLink}>Profile</NavLink>
        </div>
    )
}

export default NavigationLink;
