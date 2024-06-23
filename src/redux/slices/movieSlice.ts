import {IMovieModel} from "../../interfaces/IMovieModel";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";
import {IPaginatedMovieModel} from "../../interfaces/IPaginatedMovieModel";

interface IState {
    movies: IMovieModel[];
    movie: IMovieModel | null;
    genre: number | null;
    currentPage: number;
    totalPages: number;
    error: string | null;
}

const initialState: IState = {
    movies: [],
    movie: null,
    genre: null,
    currentPage: 1,
    totalPages: null,
    error: null
};

interface FetchMoviesParams {
    page: number;
    genreId: number | null;
}

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

const getAllMoviesByGenre = createAsyncThunk<IPaginatedMovieModel, FetchMoviesParams>(
    'movieSlice/getAllMoviesByGenre',
    async ({page, genreId}, {rejectWithValue}) => {
        try {
            return await movieService.getAll(page.toString(), genreId?.toString());
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

const getMovieById = createAsyncThunk<IMovieModel, string>(
    'movieSlice/getMovieById',
    async (id, {rejectWithValue}) => {
        try {
            return await movieService.getMovieById(id);
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
        },
        setGenre: (state, action) => {
            state.genre = action.payload;
        },
        setMovie: (state, action) => {
            state.movie = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results || [];
                state.totalPages = action.payload.total_pages || 0;
            })
            .addCase(getAllMovies.rejected, (state, action) => {
                state.error = action.payload as string;
            })
            .addCase(getAllMoviesByGenre.fulfilled, (state, action) => {
                state.movies = action.payload.results || [];
                state.totalPages = action.payload.total_pages || 0;
            })
            .addCase(getAllMoviesByGenre.rejected, (state, action) => {
                state.error = action.payload as string;
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movie = action.payload || null;
            })
            .addCase(getMovieById.rejected, (state, action) => {
                state.error = action.payload as string;
            })
});

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies,
    getAllMoviesByGenre,
    getMovieById
};

export {
    movieReducer,
    movieActions
};
