import {IPaginatedMovieModel} from "../interfaces/IPaginatedMovieModel";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";
import {AxiosError} from "axios";

const movieService = {
    getAll: async (page?: string): Promise<IPaginatedMovieModel | null> => {

        try {
            const response = await apiService.get<IPaginatedMovieModel>(urls.discover.movie, {params: {page: page}});
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

export {movieService};
