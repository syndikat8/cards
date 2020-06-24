import React from "react";
import {NavLink} from "react-router-dom";
import styles from './NavLink.module.css';
import {footer, header, middle} from "../../routes/routes";

const NavigationLink = () => {

    return (
        <div>
            <NavLink to={header} className={styles.navLink}>Ссылка на Header</NavLink>
            <NavLink to={middle} className={styles.navLink}>Ссылка на Middle</NavLink>
            <NavLink to={footer} className={styles.navLink}>Ссылка на Footer</NavLink>
        </div>
    )
}

export default NavigationLink;
