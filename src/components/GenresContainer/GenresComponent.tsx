import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/genreSlice";
import {movieActions} from "../../redux/slices/movieSlice";
import {useSearchParams} from "react-router-dom";
import {Button} from "@mui/material";
import styles from "./Genres.module.css"

const GenresComponent = () => {
    const {genres, error} = useAppSelector(state => state.genres);
    const {currentPage} = useAppSelector(state => state.movies);
    const {theme} = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({
        page: '1'
    });

    useEffect(() => {
        dispatch(genreActions.getAllGenres());
    }, [dispatch]);

    useEffect(() => {
        const genreId = query.get('with_genres');
        if (genreId) {
            dispatch(movieActions.setGenre(parseInt(genreId)));
            dispatch(movieActions.getAllMoviesByGenre({
                page: parseInt(query.get('page') || '1'),
                genreId: parseInt(genreId)
            }));
        } else {
            dispatch(movieActions.getAllMovies(parseInt(query.get('page') || '1')));
        }
    }, [query, dispatch]);

    useEffect(() => {
        setQuery(prev => ({...prev, page: currentPage.toString()}));
    }, [currentPage, setQuery]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!Array.isArray(genres)) {
        return <div>Loading...</div>;
    }

    const showGenre = (genreId: number) => {
        return () => {
            setQuery({page: '1', with_genres: genreId.toString()});
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
        <div className={styles.genresBlock}>
            <div className={styles.genresButtonsBlock}>
                <Button variant="outlined" color={theme ? 'error' : 'primary'} className={styles.genresButton}
                        onClick={showAll} key={0}>
                    Всі
                </Button>
                {genres.map(genre => (
                    <Button variant="outlined" color={theme ? 'error' : 'primary'} className={styles.genresButton}
                            onClick={showGenre(genre.id)}
                            key={genre.id}>
                        {genre.name}
                    </Button>))}
            </div>
        </div>
    );
};

export default GenresComponent;