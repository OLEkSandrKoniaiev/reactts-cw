import {IMovieModel} from "../../interfaces/IMovieModel";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";
import {IPaginatedMovieModel} from "../../interfaces/IPaginatedMovieModel";

interface IState {
    movies: IMovieModel[];
    currentPage: number;
    totalPages: number;
    error: string | null;
}

const initialState: IState = {
    movies: [],
    currentPage: 1,
    totalPages: 500, // встановлюємо початкове значення для загальної кількості сторінок
    error: null
};

const getAllMovies = createAsyncThunk<IPaginatedMovieModel, number>(
    'movieSlice/getAllMovies',
    async (page, {rejectWithValue}) => {
        try {
            return await movieService.getAll(page.toString());
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages; // оновлюємо загальну кількість сторінок
            })
            .addCase(getAllMovies.rejected, (state, action) => {
                state.error = action.payload as string;
            })
});

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies
};

export {
    movieReducer,
    movieActions
};