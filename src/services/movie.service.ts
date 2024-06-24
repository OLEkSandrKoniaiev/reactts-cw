import {IPaginatedMovieModel} from "../interfaces/IPaginatedMovieModel";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";
import {AxiosError} from "axios";
import {IMovieModel} from "../interfaces/IMovieModel";
import {IMovieInfoModel} from "../interfaces/IMovieInfoModel";

const movieService = {
    getAll: async (page?: string, genreId?: string): Promise<IPaginatedMovieModel | null> => {
        try {
            const params: any = {page};
            if (genreId) {
                params.with_genres = genreId;
            }
            const response = await apiService.get<IPaginatedMovieModel>(urls.discover.movie, {params});
            return response.data;
        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError);
        }
        return null;
    },

    searchMovies: async (page?: string, queryRequest?: string): Promise<IPaginatedMovieModel | null> => {
        try {
            const params: any = {page};
            if (queryRequest) {
                params.query = queryRequest;
            }
            const response = await apiService.get<IPaginatedMovieModel>(urls.search.movie, {params});
            return response.data;
        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError);
        }
        return null;
    },

    getMovieById: async (id: string): Promise<IMovieInfoModel | null> => {
        try {
            const response = await apiService.get<IMovieInfoModel>(`${urls.movie}/${id}`);
            return response.data;
        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError);
        }
        return null;
    },

    getNewMovies: async (): Promise<IMovieModel[] | null> => {
        try {
            const response = await apiService.get<IPaginatedMovieModel>(urls.discover.movie, {
                params: {
                    sort_by: "release_date.desc",
                    page: 1,
                },
            });
            return response.data.results;
        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError);
        }
        return null;
    },

    getPopularMovies: async (): Promise<IMovieModel[] | null> => {
        try {
            const response = await apiService.get<IPaginatedMovieModel>(urls.discover.movie, {
                params: {
                    sort_by: "popularity.desc",
                    page: 1,
                },
            });
            return response.data.results;
        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError);
        }
        return null;
    }
};

export {movieService};
