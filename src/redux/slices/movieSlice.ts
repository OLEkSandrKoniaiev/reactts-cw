import {IMovieModel} from "../../interfaces/IMovieModel";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";

interface IState {
    movies: IMovieModel[]
}

let initialState: IState = {
    movies: []
}

const getAllMovies = createAsyncThunk<IMovieModel[], void>(
    'movieSlice/getAllMovies',
    async (_, {rejectWithValue}) => {
        try {
            return await movieService.getAllMovies(1);
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
});

const {reducer: movieReducer, actions} = movieSlice;

const movieAction = {
    ...actions,
    getAllMovies
}

export {
    movieReducer,
    movieAction
}