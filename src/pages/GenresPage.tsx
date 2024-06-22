import React from 'react';
import GenresComponent from "../components/GenresContainer/GenresComponent";
import MoviesList from "../components/MoviesContainer/MoviesList";
import PaginationComponent from "../components/PaginationContainer/PaginationComponent";

const GenresPage = () => {
    return (
        <div>
            <GenresComponent/>
            <MoviesList/>
            <PaginationComponent/>
        </div>
    );
};

export default GenresPage;