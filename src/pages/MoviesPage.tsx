import React, {useEffect, useState} from 'react';
import MoviesList from "../components/MoviesContainer/MoviesList";
import {useSearchParams} from "react-router-dom";
import {IPaginatedMovieModel} from "../interfaces/IPaginatedMovieModel";
import {movieService} from "../services/movie.service";
import PaginationComponent from "../components/PaginationContainer/PaginationComponent";
import GenresComponent from "../components/GenresContainer/GenresComponent";

const MoviesPage = () => {

    // const [genreId, setGenreId] = useState<number | null>(null);

    // const [query, setQuery] = useSearchParams({
    //     page: '1'
    // });
    //
    // const [moviesPaginatedObject, setMoviesPaginatedObject] = useState<IPaginatedMovieModel>({
    //     results: [],
    //     page: 1,
    //     total_pages: 0,
    //     total_results: 0
    // });
    //
    // useEffect(() => {
    //     movieService.getAll(query.get('page') || '1').then(value => {
    //         if (value) {
    //             setMoviesPaginatedObject(value);
    //         }
    //     });
    // }, [query]);

    return (
        <div>
            <GenresComponent/>
            <MoviesList/>
            {/*movies={moviesPaginatedObject.results}*/}
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;