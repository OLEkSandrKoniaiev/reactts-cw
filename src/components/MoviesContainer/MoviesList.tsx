import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";
import MoviesListCard from "./MoviesListCard";
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {
    const [query, setQuery] = useSearchParams({
        page: '1'
    });

    const {movies, currentPage} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAllMovies(parseInt(query.get('page'))));
    }, [query, dispatch]);

    useEffect(() => {
        setQuery({page: currentPage.toString()});
    }, [currentPage, setQuery]);

    return (
        <div>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesList;