import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";

const MovieInfoComponent = () => {

    const {movie} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    return (
        <div>
            {movie.id}
        </div>
    );
};

export default MovieInfoComponent;