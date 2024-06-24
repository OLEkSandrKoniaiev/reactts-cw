import React from 'react';
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {searchActions} from "../../redux/slices/searchSlice";
import {useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import {Button, TextField} from "@mui/material";
import styles from "./Search.module.css"

const SearchComponent = () => {
    const {register, handleSubmit} = useForm<{ query: string }>();
    const {theme} = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = (post: { query: string }) => {
        dispatch(searchActions.searchMovies({page: 1, queryRequest: post.query}));
        navigate(`?query=${post.query}&page=1`);
    };

    return (
        <div className={styles.searchBlock}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField id="standard-basic" variant="standard" {...register('query')} placeholder="Пошук фільмів..."/>
                <Button type="submit" variant="outlined" color={theme ? 'error' : 'primary'}>Пошук <SearchIcon/></Button>
            </form>
        </div>
    );
};

export default SearchComponent;
