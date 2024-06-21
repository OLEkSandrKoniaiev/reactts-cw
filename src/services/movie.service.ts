import {IMovieModel} from "../interfaces/IMovieModel";
import {IPaginatedMoviePageModel} from "../interfaces/IPaginatedMoviePageModel";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const movieService  = {
    getAllMovies: async  (page: number): Promise<IMovieModel[]> => {
        const response = await apiService.get<IPaginatedMoviePageModel>(urls.movies.base + page);
        console.log(response.data.results);
        return response.data.results;
    }
}

export {
    movieService
}