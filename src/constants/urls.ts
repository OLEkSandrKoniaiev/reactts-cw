const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    discover: {
        movie: '/discover/movie'
    },
    genre: {
        movie_list: '/genre/movie/list'
    },
    search: {
        movie: '/search/movie'
    },
    configuration: '/configuration',
    movie: '/movie'
};

export {
    baseURL, urls
};