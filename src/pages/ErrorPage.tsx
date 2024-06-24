import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "../styles/General.module.css";


const ErrorPage = () => {
    return (
        <div className={styles.errorPage}>
            <div>
                <h1>Помилка</h1>
                <h3>ймовірно в вказали неправильну URL</h3>
            </div>
            <NavLink to={''} className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                Перейти на початкову сторінку
            </NavLink>
        </div>
    );
};

export default ErrorPage;