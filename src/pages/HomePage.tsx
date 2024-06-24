import React from 'react';
import SearchComponent from "../components/SearchContainer/SearchComponent";
import MovieSearchList from "../components/MoviesContainer/MovieSearchList";
import SearchPaginationComponent from "../components/PaginationContainer/SearchPaginationComponent";
import styles from "./General.module.css";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <SearchComponent/>
            <MovieSearchList/>
            <SearchPaginationComponent/>
        </div>
    );
};

export default HomePage;