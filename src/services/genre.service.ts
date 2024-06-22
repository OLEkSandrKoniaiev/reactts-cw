import {AxiosError} from "axios";
import {IGenreModel} from "../interfaces/IGenreModel";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const genreService = {
    getAll: async (): Promise<IGenreModel[] | null> => {
        try {
            const response = await apiService.get<IGenreModel[]>(urls.genre.movie_list, {params: {language: 'uk'}});
            console.log(response.data);
            return response.data;
        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError);
        }
    }
};

export {
    genreService
}