import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieAction} from "../../redux/slices/movieSlice";
import MovieComponent from "./MovieComponent";
import {IMovieModel} from "../../interfaces/IMovieModel";

const MoviesComponent = () => {
    const {movies} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieAction.getAllMovies());
    }, [dispatch]);

    return (
        <div>
            {movies.map((movie:IMovieModel) => <MovieComponent key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesComponent;