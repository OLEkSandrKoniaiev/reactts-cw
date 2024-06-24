import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/movieSlice";
import PosterPreviewComponent from "../PosterContainer/PosterPreviewComponent";
import StarRatings from 'react-star-ratings';
import styles from "./MovieInfo.module.css"

const MovieInfoComponent = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {movie, error} = useAppSelector(state => state.movies);

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getMovieById(id));
        }
    }, [id, dispatch]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1 className={styles.title}>{movie.title}</h1>
            <div className={styles.movieInfoBlock}>
                <div>
                    <PosterPreviewComponent path={movie.poster_path} size={3} lang={movie.original_language}
                                            genres={movie.genres}/>
                    <div className={styles.rateBlock}>
                        <span>Популярність - {movie.popularity}</span>
                        <span>Проголосувало - {movie.vote_count}</span>
                        <StarRatings
                            rating={movie.vote_average}
                            starRatedColor="#4F8AC1"
                            numberOfStars={10}
                            name='rating'
                            starDimension="20px"
                            starSpacing="2px"/>
                    </div>
                </div>
                <div className={styles.describeBlock}>
                    <span>Назва: <b>{movie.original_title}</b></span>
                    <span>Опис: {movie.overview}</span>
                    <span>Дата релізу: {movie.release_date}</span>
                    <span>Та інша інформація...</span>
                </div>
            </div>
        </>
    );
};

export default MovieInfoComponent;
