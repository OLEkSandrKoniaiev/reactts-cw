import React, {useEffect, useState} from 'react';
import MoviesComponent from "../components/MoviesContainer/MoviesComponent";
import {useSearchParams} from "react-router-dom";
import {IPaginatedMoviePageModel} from "../interfaces/IPaginatedMoviePageModel";
import {movieService} from "../services/movie.service";

const MoviesPage = () => {
    const [query, setQuery] = useSearchParams({
        page: '1'
    });

    const [moviesPaginatedObject, setMoviesPaginatedObject] = useState<IPaginatedMoviePageModel>({
        results: [],
        page: 1,
        total_pages: 0,
        total_results: 0
    });

    useEffect(() => {
        movieService.getAllMovies(query.get('page') || '1').then(value => {
            if (value) {
                setMoviesPaginatedObject(value);
            }
        });
    }, [query]);

    return (
        <div>
            <MoviesComponent movies={moviesPaginatedObject.results}/>
        </div>
    );
};

export default MoviesPage;