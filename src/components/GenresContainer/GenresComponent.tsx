import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/genreSlice";

const GenresComponent = () => {

    const {genres} = useAppSelector(state => state.genres)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAllGenres());
    }, [dispatch]);
    return (
        <div>
            {
                genres.map(genre => <button key={genre.id}>{genre.name}</button>)
            }
        </div>
    );
};

export default GenresComponent;