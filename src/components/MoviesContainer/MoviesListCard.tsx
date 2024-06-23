import React, {FC} from 'react';
import {IMovieModel} from "../../interfaces/IMovieModel";
import PosterPreviewComponent from "../PosterContainer/PosterPreviewComponent";
import {NavLink} from "react-router-dom";

interface IProps {
    singleMovie: IMovieModel
}

const MoviesListCard: FC<IProps> = ({singleMovie}) => {
    return (
        <div>
            <span>ID: {singleMovie.id} - тимчасово</span><br/>
            <span>Language: {singleMovie.original_language} -тимчасово</span><br/>
            <NavLink to={`/movies/${singleMovie.id}`}>
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