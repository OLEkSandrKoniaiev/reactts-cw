const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    discover: {
        movie: `${baseURL}/discover/movie`
    },
    genre: {
        movie_list: `${baseURL}/genre/movie/list`
    }
};

export { baseURL, urls };
