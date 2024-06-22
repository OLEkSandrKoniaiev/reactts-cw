import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/Header/HeaderComponent";
import {movieService} from "../services/movie.service";
import {genreService} from "../services/genre.service";


const MainLayout = () => {
    const csajk = ():void => {
        movieService.getAll('1');
        movieService.getAll('2');
        genreService.getAll();
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