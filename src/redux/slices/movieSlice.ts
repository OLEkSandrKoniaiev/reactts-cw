import {IMovieModel} from "../../interfaces/IMovieModel";
import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";
import {IPaginatedMovieModel} from "../../interfaces/IPaginatedMovieModel";
import {IMovieInfoModel} from "../../interfaces/IMovieInfoModel";

interface IState {
    movies: IMovieModel[];
    movie: IMovieInfoModel | null;
    newMovies: IMovieModel[];
    popularMovies: IMovieModel[];
    genre: number | null;
    currentPage: number;
    totalPages: number;
    error: string | null;
}

const initialState: IState = {
    movies: [],
    movie: null,
    newMovies: [],
    popularMovies: [],
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

const getMovieById = createAsyncThunk<IMovieInfoModel, string>(
    'movieSlice/getMovieById',
    async (id, {rejectWithValue}) => {
        try {
            return await movieService.getMovieById(id);
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

const getNewMovies = createAsyncThunk<IMovieModel[]>(
    'movieSlice/getNewMovies',
    async (_, {rejectWithValue}) => {
        try {
            return await movieService.getNewMovies();
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

const getPopularMovies = createAsyncThunk<IMovieModel[]>(
    'movieSlice/getPopularMovies',
    async (_, {rejectWithValue}) => {
        try {
            return await movieService.getPopularMovies();
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
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results || [];
                state.totalPages = action.payload.total_pages || 0;
            })
            .addCase(getAllMoviesByGenre.fulfilled, (state, action) => {
                state.movies = action.payload.results || [];
                state.totalPages = action.payload.total_pages || 0;
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movie = action.payload || null;
            })
            .addCase(getNewMovies.fulfilled, (state, action) => {
                state.newMovies = action.payload || [];
            })
            .addCase(getPopularMovies.fulfilled, (state, action) => {
                state.popularMovies = action.payload || [];
            })
            .addMatcher(isRejected(getAllMovies, getAllMoviesByGenre, getMovieById, getNewMovies, getPopularMovies), (state, action) => {
                state.error = action.payload as string;
            })
});

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies,
    getAllMoviesByGenre,
    getMovieById,
    getNewMovies,
    getPopularMovies
};

export {
    movieReducer,
    movieActions
};
