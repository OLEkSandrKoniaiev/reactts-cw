import {urls} from "../constants/urls";
import {apiService} from "./api.service";

const imageService = {
    getPosterImage: async (mySize: number): Promise<string> => {
        const configuration = await apiService.get(urls.configuration);
        const poster_sizes: string[] = configuration.data.images.poster_sizes;

        if (mySize >= poster_sizes.length) {
            return configuration.data.images.secure_base_url + "/" + poster_sizes[1];
        } else {
            return configuration.data.images.secure_base_url + "/" + poster_sizes[mySize];
        }
    }
};

export {
    imageService
}