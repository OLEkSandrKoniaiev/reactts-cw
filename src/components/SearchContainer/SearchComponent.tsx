import React from 'react';
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {searchActions} from "../../redux/slices/searchSlice";
import {useNavigate} from "react-router-dom";

const SearchComponent = () => {
    const {register, handleSubmit} = useForm<{ query: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = (post: { query: string }) => {
        dispatch(searchActions.searchMovies({page: 1, queryRequest: post.query}));
        navigate(`?query=${post.query}&page=1`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('query')} placeholder="Search for movies..."/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchComponent;
