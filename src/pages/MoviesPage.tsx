import React from 'react';
import MoviesList from "../components/MoviesContainer/MoviesList";
import PaginationComponent from "../components/PaginationContainer/PaginationComponent";
import GenresComponent from "../components/GenresContainer/GenresComponent";
import styles from "../styles/General.module.css";

const MoviesPage = () => {
    return (
        <div className={styles.moviesPage}>
            <GenresComponent/>
            <MoviesList/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;