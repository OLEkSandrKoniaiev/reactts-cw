import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {searchActions} from "../../redux/slices/searchSlice";
import MoviesListCard from "./MoviesListCard";
import {useSearchParams} from "react-router-dom";
import styles from "./Movie.module.css"

const MovieSearchList = () => {
    const [query] = useSearchParams();
    const dispatch = useAppDispatch();
    const {movies, error} = useAppSelector(state => state.search);

    useEffect(() => {
        const searchQuery = query.get('query');
        const page = parseInt(query.get('page') || '1');
        if (searchQuery) {
            dispatch(searchActions.searchMovies({page, queryRequest: searchQuery}));
        }
    }, [query, dispatch]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.CardsBlock}>
            {movies?.map(movie => <MoviesListCard key={movie.id} singleMovie={movie}/>)}
        </div>
    );
};

export default MovieSearchList;
