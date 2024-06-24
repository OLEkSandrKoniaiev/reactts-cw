import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderContainer/HeaderComponent";
import styles from "../pages/General.module.css"


const MainLayout = () => {
    return (
        <div className={styles.root}>
            <div className={styles.mainLayout}>
                <HeaderComponent/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;