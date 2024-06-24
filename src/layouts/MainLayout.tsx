import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderContainer/HeaderComponent";
import styles from "../styles/General.module.css"
import {useAppSelector} from "../hooks/reduxHooks";


const MainLayout = () => {
    const {theme} = useAppSelector(state => state.theme);

    return (
        <div className={theme? styles.rootDark: styles.rootLight}>
            <div className={styles.mainLayout}>
                <HeaderComponent/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;