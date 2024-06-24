import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";
import MoviesListCard from "./MoviesListCard";
import styles from "./Movie.module.css"

const NewPopularMoviesList = () => {
    const dispatch = useAppDispatch();
    const {popularMovies, error} = useAppSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieActions.getPopularMovies());
    }, [dispatch]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2 className={styles.header}>Популярні зараз</h2>
            <div  className={styles.CardsBlock}>
                {popularMovies.map(movie => (
                    <MoviesListCard key={movie.id} singleMovie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default NewPopularMoviesList;
