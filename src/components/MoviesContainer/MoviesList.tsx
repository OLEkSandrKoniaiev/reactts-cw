import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";
import MoviesListCard from "./MoviesListCard";
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {
    const [query, setQuery] = useSearchParams({
        page: '1'
    });

    const {movies, currentPage, genre, error} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (genre) {
            dispatch(movieActions.getAllMoviesByGenre({ page: parseInt(query.get('page')!), genreId: genre }));
        } else {
            dispatch(movieActions.getAllMovies(parseInt(query.get('page')!)));
        }
    }, [query, dispatch, genre]);

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
