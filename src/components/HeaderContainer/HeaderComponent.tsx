import React from 'react';
import {NavLink} from "react-router-dom";
import logoLight from '../../logo_light.svg';
import logoDark from '../../logo_dark.svg';
import styles from './Header.module.css';
import UserInfoComponent from "../UserContainer/UserInfoComponent";
import {useAppSelector} from "../../hooks/reduxHooks";

const HeaderComponent = () => {
    const {theme} = useAppSelector(state => state.theme);

    return (
        <div className={theme? styles.navBlockDark: styles.navBlockLight}>
            <div>
                <NavLink to={''}
                         className={({isActive}) => (isActive ? (theme ? styles.navLinkActiveDark : styles.navLinkActiveLight) :
                             (theme ? styles.navLinkDark : styles.navLinkLight))}>
                    <img src={theme ? logoDark : logoLight} alt={'logo_light'}/>
                </NavLink>
            </div>
            <div>
                <NavLink to={'/movies'}
                         className={({isActive}) => (isActive ? (theme ? styles.navLinkActiveDark : styles.navLinkActiveLight) :
                             (theme ? styles.navLinkDark : styles.navLinkLight))}>
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