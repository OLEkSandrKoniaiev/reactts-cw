import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/Header/HeaderComponent";
import {movieService} from "../services/movie.service";


const MainLayout = () => {
    const csajk = ():void => {
        movieService.getAllMovies(1);
        movieService.getAllMovies(2);
    }

    return (
        <div>
            MainLayout
            <HeaderComponent/>
            <Outlet/>
            <button onClick={csajk}>click</button>
        </div>
    );
};

export default MainLayout;