import {IMovieModel} from "./IMovieModel";

export interface IPaginatedMoviePageModel {
    page: number,
    results: IMovieModel[],
    total_pages: number,
    total_results: number
}