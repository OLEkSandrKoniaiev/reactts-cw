import React from 'react';
import SearchComponent from "../components/SearchContainer/SearchComponent";
import MovieSearchList from "../components/MoviesContainer/MovieSearchList";
import SearchPaginationComponent from "../components/PaginationContainer/SearchPaginationComponent";
import styles from "./General.module.css";
import NewPopularMoviesList from "../components/MoviesContainer/NewPopularMoviesList";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <SearchComponent/>
            <MovieSearchList/>
            <SearchPaginationComponent/>
            <NewPopularMoviesList/>
        </div>
    );
};

export default HomePage;