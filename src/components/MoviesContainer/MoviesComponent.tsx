import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieAction} from "../../redux/slices/movieSlice";
import MovieComponent from "./MovieComponent";
import {IMovieModel} from "../../interfaces/IMovieModel";

interface IProps {
    movies: IMovieModel[] | undefined
}

const MoviesComponent: FC<IProps> = ({movies}) => {
    // const {movies} = useAppSelector(state => state.movies)
    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(movieAction.getAllMovies());
    // }, [dispatch]);

    return (
        <div>
            {movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesComponent;