import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { movieActions } from "../../redux/slices/movieSlice";

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({
        page: '1'
    });

    const { currentPage, totalPages, genre } = useAppSelector(state => state.movies);
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

        const params: any = { page: page.toString() };
        if (genre) {
            params.with_genres = genre.toString();
        }
        setQuery(params);
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
