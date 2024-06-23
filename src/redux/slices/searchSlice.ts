import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";
import {IPaginatedMovieModel} from "../../interfaces/IPaginatedMovieModel";
import {IMovieModel} from "../../interfaces/IMovieModel";

interface IState {
    movies: IMovieModel[] | null;
    currentPage: number;
    totalPages: number;
    error: string | null;
}

const initialState: IState = {
    movies: null,
    currentPage: 1,
    totalPages: null,
    error: null
};

interface FetchMoviesParams {
    page: number;
    queryRequest: string
}

const searchMovies = createAsyncThunk<IPaginatedMovieModel, FetchMoviesParams>(
    'searchSlice/searchMovies',
    async ({page, queryRequest}, {rejectWithValue}) => {
        try {
            return await movieService.searchMovies(page.toString(), queryRequest);
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results || [];
                state.totalPages = action.payload.total_pages || 0;
            })
            .addCase(searchMovies.rejected, (state, action) => {
                state.error = action.payload as string;
            });
    }
});

const {reducer: searchReducer} = searchSlice;

const searchActions = {
    ...searchSlice,
    searchMovies
};

export {
    searchReducer,
    searchActions
};
