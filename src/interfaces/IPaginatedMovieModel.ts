import {IMovieModel} from "./IMovieModel";

export interface IPaginatedMovieModel {
    page: number,
    results: IMovieModel[],
    total_pages: number,
    total_results: number
}