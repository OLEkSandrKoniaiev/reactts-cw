import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";

const PaginationComponent = () => {
    const [query] = useSearchParams({
        page: '1'
    });

    const {currentPage, totalPages} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const page = parseInt(query.get('page') || '1', 10);
        dispatch(movieActions.setCurrentPage(page));
    }, [query, dispatch]);

    const changePage = (action: string) => {
        let page = currentPage;

        switch (action) {
            case 'prev':
                if (page > 1) {
                    dispatch(movieActions.setCurrentPage(page - 1));
                }
                break;
            case 'next':
                if (page < totalPages) {
                    dispatch(movieActions.setCurrentPage(page + 1));
                }
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div>
                <button onClick={() => changePage('prev')} disabled={currentPage <= 1}>
                    prev
                </button>
                <button onClick={() => changePage('next')} disabled={currentPage >= totalPages}>
                    next
                </button>
            </div>
        </>
    );
};

export default PaginationComponent;
