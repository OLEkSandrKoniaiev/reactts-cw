import {IPaginatedMovieModel} from "../interfaces/IPaginatedMovieModel";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";
import {AxiosError} from "axios";

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
    }
};

export {movieService};
