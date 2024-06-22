import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/genreSlice";
import {movieActions} from "../../redux/slices/movieSlice";
import {useSearchParams} from "react-router-dom";

const GenresComponent = () => {
    const {genres, error} = useAppSelector(state => state.genres);
    const {currentPage} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({
        page: '1'
    });

    useEffect(() => {
        dispatch(genreActions.getAllGenres());
    }, [dispatch]);

    useEffect(() => {
        setQuery({page: currentPage.toString()});
    }, [currentPage, setQuery]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!Array.isArray(genres)) {
        return <div>Loading...</div>;
    }

    const showGenre = (genreId: number) => {
        return () => {
            setQuery({page: '1'});
            dispatch(movieActions.setGenre(genreId));
            dispatch(movieActions.setCurrentPage(1));
            dispatch(movieActions.getAllMoviesByGenre({page: 1, genreId}));
        };
    };

    const showAll = () => {
        setQuery({page: '1'});
        dispatch(movieActions.setGenre(null));
        dispatch(movieActions.setCurrentPage(1));
        dispatch(movieActions.getAllMovies(1));
    };

    return (
        <div>
            <button onClick={showAll} key={0}>
                Всі
            </button>
            {genres.map(genre => (
                <button onClick={showGenre(genre.id)} key={genre.id}>
                    {genre.name}
                </button>
            ))}
        </div>
    );
};

export default GenresComponent;
