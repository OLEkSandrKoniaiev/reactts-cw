import React, {FC} from 'react';
import {IMovieModel} from "../../interfaces/IMovieModel";

interface IProps {
    movie: IMovieModel
}

const MoviesListCard:FC<IProps> = ({movie}) => {
    return (
        <div>
            {movie.id} - {movie.title}
        </div>
    );
};

export default MoviesListCard;