import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/movieSlice";
import PosterPreviewComponent from "../PosterContainer/PosterPreviewComponent";
import StarRatings from 'react-star-ratings';

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
        <div>
            <div>
                <div>
                    <h1>{movie.title}</h1>
                    <PosterPreviewComponent path={movie.poster_path} size={3} lang={movie.original_language}
                                            genres={movie.genres}/>
                    <p>{movie.popularity}</p>
                    <p>{movie.vote_count}</p>
                    <StarRatings
                        rating={movie.vote_average}
                        starRatedColor="blue"
                        numberOfStars={10}
                        name='rating'
                        starDimension="20px"
                        starSpacing="2px"/>
                </div>
                <div>
                    <p>{movie.original_title}</p>
                    <p>{movie.overview}</p>
                    <p>{movie.release_date}</p>
                    <p>{movie.vote_average}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieInfoComponent;
