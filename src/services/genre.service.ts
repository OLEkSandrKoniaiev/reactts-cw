import {AxiosError} from "axios";
import {IGenreModel} from "../interfaces/IGenreModel";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const genreService = {
    getAll: async (): Promise<IGenreModel[]> => {
        try {
            const response = await apiService.get<{
                genres: IGenreModel[]
            }>(urls.genre.movie_list, {params: {language: 'uk'}});
            return response.data.genres;
        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError);
            throw axiosError;
        }
    }
};

export {genreService};