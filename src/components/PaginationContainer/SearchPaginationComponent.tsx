import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {searchActions} from "../../redux/slices/searchSlice";
import styles from "./Pagination.module.css";
import {Button} from "@mui/material";

const SearchPaginationComponent = () => {
    const [query, setQuery] = useSearchParams({
        page: '1'
    });

    const {currentPage, totalPages} = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const searchQuery = query.get('query');
        const page = parseInt(query.get('page') || '1');
        dispatch(searchActions.setCurrentPage(page));
        if (searchQuery) {
            dispatch(searchActions.searchMovies({page, queryRequest: searchQuery}));
        }
    }, [query, dispatch]);

    const changePage = (action: string) => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        let page = currentPage;
        const searchQuery = query.get('query');

        switch (action) {
            case 'prev':
                if (page > 1) {
                    page -= 1;
                    setQuery({page: page.toString(), query: searchQuery});
                }
                break;
            case 'next':
                if (page < totalPages) {
                    page += 1;
                    setQuery({page: page.toString(), query: searchQuery});
                }
                break;
            default:
                break;
        }
    }

    if (query.get('query') && totalPages > 1) {
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
    }

    return null;
};

export default SearchPaginationComponent;
