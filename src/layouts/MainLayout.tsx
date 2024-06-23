import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderContainer/HeaderComponent";


const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;