import { IMovieModel } from "../interfaces/IMovieModel";
import { IPaginatedMoviePageModel } from "../interfaces/IPaginatedMoviePageModel";
import { apiService } from "./api.service";
import { urls } from "../constants/urls";
import {AxiosError, AxiosResponse} from "axios";

const movieService = {
    // getAllMovies: async (page: number = 1): Promise<IMovieModel[]> => {
    //     try {
    //         const response: AxiosResponse<IPaginatedMoviePageModel> = await apiService.get(`${urls.movies.base}&page=${page}`);
    //         console.log(response.data.results);
    //         return response.data.results;
    //     } catch (error) {
    //         console.error("Failed to fetch movies", error);
    //         throw error;
    //     }
    // }
    getAllMovies: async (page?: string): Promise<IPaginatedMoviePageModel | null> => {

        try {
            const response = await apiService.get<IPaginatedMoviePageModel>(urls.movies.base, {params: {page: page}});
            console.log(response.data);
            return response.data;

        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError);
            // if (axiosError?.response?.status === 401) {
            //     const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
            //     await authService.refresh(refreshToken);
            //     return await carService.getUserCars(page);
            // }
        }

        return null;
    }
};

export { movieService };
