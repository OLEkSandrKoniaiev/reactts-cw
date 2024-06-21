import {AxiosResponse} from "axios";

export type IResponce<T> = Promise<AxiosResponse<T>>;