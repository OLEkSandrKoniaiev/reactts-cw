import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";
import styles from "./Pagination.module.css"
import {Button} from "@mui/material";

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({
        page: '1'
    });

    const {currentPage, totalPages, genre} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const page = parseInt(query.get('page') || '1');
        dispatch(movieActions.setCurrentPage(page));
    }, [query, dispatch]);

    const changePage = (action: string) => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        let page = currentPage;

        switch (action) {
            case 'prev':
                if (page > 1) {
                    page -= 1;
                    dispatch(movieActions.setCurrentPage(page));
                }
                break;
            case 'next':
                if (page < totalPages) {
                    page += 1;
                    dispatch(movieActions.setCurrentPage(page));
                }
                break;
            default:
                break;
        }

        const params: any = {page: page.toString()};
        if (genre) {
            params.with_genres = genre.toString();
        }
        setQuery(params);
    }

    return (
        <div className={styles.paginationBlock}>
            <Button variant="contained" onClick={() => changePage('prev')} disabled={currentPage <= 1}>
                prev
            </Button>
            {currentPage} з {totalPages}
            <Button variant="contained" onClick={() => changePage('next')} disabled={currentPage >= totalPages}>
                next
            </Button>
        </div>
    );
};

export default PaginationComponent;
