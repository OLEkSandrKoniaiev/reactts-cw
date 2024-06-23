import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {searchActions} from "../../redux/slices/searchSlice";

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

    return (
        <div>
            <button onClick={() => changePage('prev')} disabled={currentPage <= 1}>
                prev
            </button>
            {currentPage} - {totalPages}
            <button onClick={() => changePage('next')} disabled={currentPage >= totalPages}>
                next
            </button>
        </div>
    );
};

export default SearchPaginationComponent;
