import React, {useState} from 'react';
import MoviesComponent from "../components/MoviesContainer/MoviesComponent";
import {useSearchParams} from "react-router-dom";
import {IPaginatedMoviePageModel} from "../interfaces/IPaginatedMoviePageModel";
import {IMovieModel} from "../interfaces/IMovieModel";

const MoviesPage = () => {
    const [query, setQuery] = useSearchParams({
        page: '1'
    });

    const [moviesPaginatedObject, setMoviesPaginatedObject] = useState<IPaginatedMoviePageModel>({
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0
    });



    return (
        <div>
            <MoviesComponent/>
        </div>
    );
};

export default MoviesPage;