import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";
import MoviesListCard from "./MoviesListCard";
import {IMovieModel} from "../../interfaces/IMovieModel";
import {useSearchParams} from "react-router-dom";

// interface IProps {
//     movies: IMovieModel[] | undefined
// }

const MoviesList = () => {
    const [query, setQuery] = useSearchParams({
        page: '1'
    });

    const {movies} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAllMovies(parseInt(query.get('page'))));
    }, [query, dispatch]);

    return (
        <div>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesList;