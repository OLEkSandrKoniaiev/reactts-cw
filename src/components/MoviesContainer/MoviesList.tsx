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
        const genreId = query.get('with_genres');
        const page = parseInt(query.get('page') || '1');
        if (genreId) {
            dispatch(movieActions.setGenre(parseInt(genreId)));
            dispatch(movieActions.getAllMoviesByGenre({page, genreId: parseInt(genreId)}));
        } else {
            dispatch(movieActions.getAllMovies(page));
        }
    }, [query, dispatch]);

    useEffect(() => {
        const params: any = {page: currentPage.toString()};
        if (genre) {
            params.with_genres = genre.toString();
        }
        setQuery(params);
    }, [currentPage, setQuery, genre]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movies) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {movies.map(movie => <MoviesListCard key={movie.id} singleMovie={movie}/>)}
        </div>
    );
};

export default MoviesList;
