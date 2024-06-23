import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import MoviesPage from "../pages/MoviesPage";
import MovieInfoPage from "../pages/MovieInfoPage";
import HomePage from "../pages/HomePage";

const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movies/:id', element: <MovieInfoPage/>}
        ]
    }
];

export const router = createBrowserRouter(routes);