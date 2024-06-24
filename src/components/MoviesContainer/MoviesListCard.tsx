import React, {FC} from 'react';
import {IMovieModel} from "../../interfaces/IMovieModel";
import PosterPreviewComponent from "../PosterContainer/PosterPreviewComponent";
import {NavLink} from "react-router-dom";
import StarRatings from "react-star-ratings";

interface IProps {
    singleMovie: IMovieModel
}

const MoviesListCard: FC<IProps> = ({singleMovie}) => {
    return (
        <div>
            <span>ID: {singleMovie.id} - тимчасово</span><br/>
            <NavLink to={`/movies/${singleMovie.id}`}>
                <PosterPreviewComponent path={singleMovie.poster_path} size={2} lang={singleMovie.original_language}/>
            </NavLink><br/>
            <span>Title: {singleMovie.original_title}</span><br/>
            <span>Release date: {singleMovie.release_date}</span><br/>
            <StarRatings
                rating={singleMovie.vote_average}
                starRatedColor="blue"
                numberOfStars={10}
                name='rating'
                starDimension="20px"
                starSpacing="2px"
            /><br/>
            <span>Overview: {singleMovie.overview}</span><br/>
        </div>
    );
};

export default MoviesListCard;