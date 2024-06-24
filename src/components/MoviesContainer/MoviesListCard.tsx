import React, {FC} from 'react';
import {IMovieModel} from "../../interfaces/IMovieModel";
import PosterPreviewComponent from "../PosterContainer/PosterPreviewComponent";
import {NavLink} from "react-router-dom";
import StarRatings from "react-star-ratings";
import styles from "./Movie.module.css"

interface IProps {
    singleMovie: IMovieModel
}

const MoviesListCard: FC<IProps> = ({singleMovie}) => {
    return (
        <div className={styles.CardBlock}>
            <div>
            <NavLink to={`/movies/${singleMovie.id}`}>
                <PosterPreviewComponent path={singleMovie.poster_path} size={2} lang={singleMovie.original_language}/>
            </NavLink><br/>
            <b>{singleMovie.original_title}</b><br/>
            <span>Release date: {singleMovie.release_date}</span><br/>
            <StarRatings
                rating={singleMovie.vote_average}
                starRatedColor="#4F8AC1"
                numberOfStars={10}
                name='rating'
                starDimension="20px"
                starSpacing="2px"
            /><br/>
            </div>
            <span className={styles.Overview}>{singleMovie.overview}</span>
        </div>
    );
};

export default MoviesListCard;