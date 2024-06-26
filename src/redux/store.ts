import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";
import {searchReducer} from "./slices/searchSlice";
import {themeReducer} from "./slices/themeSlice";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer,
        search: searchReducer,
        theme: themeReducer
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