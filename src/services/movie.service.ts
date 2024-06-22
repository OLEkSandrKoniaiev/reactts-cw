import {IPaginatedMovieModel} from "../interfaces/IPaginatedMovieModel";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";
import {AxiosError} from "axios";

const movieService = {
    getAll: async (page?: string, genreId?: string): Promise<IPaginatedMovieModel | null> => {
        try {
            const params: any = { page };
            if (genreId) {
                params.with_genres = genreId;
            }
            const response = await apiService.get<IPaginatedMovieModel>(urls.discover.movie, { params });
            console.log(response.data);
            return response.data;
        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError);
        }

        return null;
    }
};

export { movieService };


