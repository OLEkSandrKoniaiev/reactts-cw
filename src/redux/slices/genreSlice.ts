import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenreModel} from "../../interfaces/IGenreModel";
import {genreService} from "../../services/genre.service";

interface IState {
    genres: IGenreModel[];
    error: string | null;
}

const initialState: IState = {
    genres: [],
    error: null
};

const getAllGenres = createAsyncThunk<IGenreModel[], void, { rejectValue: string }>(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            return await genreService.getAll();
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
            .addCase(getAllGenres.rejected, (state, action) => {
                state.error = action.payload as string;
            })
});

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getAllGenres
};

export {
    genreReducer,
    genreActions
};
