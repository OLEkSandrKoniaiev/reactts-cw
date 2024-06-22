import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer
    }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export {
    store
}

export type {
    RootState,
    AppDispatch
}