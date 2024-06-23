import React, {FC} from 'react';
import {IMovieModel} from "../../interfaces/IMovieModel";
import PosterPreviewComponent from "../PosterContainer/PosterPreviewComponent";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";

interface IProps {
    singleMovie: IMovieModel
}

const MoviesListCard: FC<IProps> = ({singleMovie}) => {

    const {movie} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const passMovie = () => {
        dispatch(movieActions.setMovie(singleMovie));
        console.log(movie);
    };

    return (
        <div>
            <span>ID: {singleMovie.id} - тимчасово</span><br/>
            <span>Language: {singleMovie.original_language} -тимчасово</span><br/>
            <NavLink to={`${singleMovie.id}`} onClick={passMovie}>
                <PosterPreviewComponent path={singleMovie.poster_path} size={2}/>
            </NavLink>
            <span>Title: {singleMovie.original_title}</span><br/>
            <span>Release date: {singleMovie.release_date}</span><br/>
            <span>Rating: {singleMovie.vote_average} - замінити на зірочки</span><br/>
            <span>Overview: {singleMovie.overview}</span><br/>
        </div>
    );
};

export default MoviesListCard;