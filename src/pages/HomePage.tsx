import React from 'react';
import SearchComponent from "../components/SearchContainer/SearchComponent";
import MovieSearchList from "../components/MoviesContainer/MovieSearchList";
import SearchPaginationComponent from "../components/PaginationContainer/SearchPaginationComponent";

const HomePage = () => {
    return (
        <div>
            <SearchComponent/>
            <MovieSearchList/>
            <SearchPaginationComponent/>
        </div>
    );
};

export default HomePage;