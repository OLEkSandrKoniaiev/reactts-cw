import React from 'react';
import {NavLink} from "react-router-dom";
import logoLight from '../../logo_light.svg';
import styles from './Header.module.css';

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to={''} className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                <img src={logoLight} alt={'logo_light'}/>
            </NavLink>
            <NavLink to={'/movies'} className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                Movies
            </NavLink>
        </div>
    );
};

export default HeaderComponent;