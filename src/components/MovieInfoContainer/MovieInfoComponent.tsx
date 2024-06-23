import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {NavLink, useParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/movieSlice";
import PosterPreviewComponent from "../PosterContainer/PosterPreviewComponent";

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

    console.log(id);
    console.log(movie);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <div>
                    <h1>{movie.title}</h1>
                    <PosterPreviewComponent path={movie.poster_path} size={3}/>
                    <p>{movie.popularity}</p>
                    <p>{movie.vote_count}</p>
                </div>
                <div>
                    <p>{movie.original_title}</p>
                    <p>{movie.overview}</p>
                    <p>{movie.release_date}</p>
                    <p>{movie.vote_average}</p>
                    <p>{movie.original_language}</p>
                    <p>{movie.genre_ids}</p>
                    {/*<p>{movie.video}</p>*/}
                    {/*<p>{movie.backdrop_path}</p>*/}
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default MovieInfoComponent;