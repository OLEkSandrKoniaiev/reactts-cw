import React from 'react';
import MovieInfoComponent from "../components/MovieInfoContainer/MovieInfoComponent";
import styles from "./General.module.css";

const MovieInfoPage = () => {
    return (
        <div className={styles.movieInfoPage}>
            <MovieInfoComponent/>
        </div>
    );
};

export default MovieInfoPage;