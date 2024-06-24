import React from 'react';
import {NavLink} from "react-router-dom";
import logoLight from '../../logo_light.svg';
import styles from './Header.module.css';
import UserInfoComponent from "../UserContainer/UserInfoComponent";

const HeaderComponent = () => {
    return (
        <div className={styles.navBlock}>
            <div>
                <NavLink to={''} className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    <img src={logoLight} alt={'logo_light'}/>
                </NavLink>
            </div>
            <div>
                <NavLink to={'/movies'} className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                    Фільми
                </NavLink>
            </div>
            <div>
                <UserInfoComponent/>
            </div>
        </div>
    );
};

export default HeaderComponent;