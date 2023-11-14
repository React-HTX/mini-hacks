# How to use the Movies JSON file:

You can directly import the JSON data into your Next.js component and map over the results array to render the list items. Here's an example:

```bash
import movieData from './movieData.json';

function MovieList() {
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movieData.results.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
```

