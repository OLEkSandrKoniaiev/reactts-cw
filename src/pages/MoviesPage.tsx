import React from 'react';
import MoviesList from "../components/MoviesContainer/MoviesList";
import PaginationComponent from "../components/PaginationContainer/PaginationComponent";
import GenresComponent from "../components/GenresContainer/GenresComponent";

const MoviesPage = () => {
    return (
        <div>
            <GenresComponent/>
            <MoviesList/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;