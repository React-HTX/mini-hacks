const API_KEY = process.env.MOVIE_API_KEY
const MOVIES_URL = process.env.BASE_URL
export const getTrendingMovies = async () => {
    const res = await fetch(`${MOVIES_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
};
export const getMovies = async (query) => {
    const res = await fetch(`${MOVIES_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await res.json();
    return data.results;
};
export const getMovieDetails = async (id) => {
    const res = await fetch(`${MOVIES_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await res.json();
    return data;
};
export const getSimilarMovies = async (id) => {
    const res = await fetch(`${MOVIES_URL}/movie/${id}/similar?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
};

