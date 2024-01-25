# How to use Fetch API to make HTTP request

 The Fetch API is a modern interface that allows you to make HTTP requests in JavaScript. It provides a more powerful and flexible way to fetch resources asynchronously across the network.

 Here is the API key and base url 

 ```bash
 MOVIE_API_KEY=9d2acf4d7102536ac39921aa41b1a275
 BASE_URL=https://api.themoviedb.org/3/
 ```

 Here is a list of 4 routes that can be used:
 ```bash
 getTrendingMovies: ${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}
 getMovies: ${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}
 getMovieDetails: ${BASE_URL}/movie/${id}?api_key=${API_KEY}
 getSimilarMovies: ${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}
 ```

Here's an example of how you can use the Fetch API to make an HTTP GET request:

```bash
 export const getTrendingMovies = async () => {
     const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
     const data = await res.json();
     return data.results;
 };

```