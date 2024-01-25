import { useEffect, useState } from "react";
import Card from "./Card";

function SearchResults({ searchText, movies }) {
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        // Assuming 'movies' is already filtered based on 'searchText'
        setFilteredMovies(movies || []);
    }, [movies]);

    return (
        <div className="flex bg-white min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-black">Top Search Results for &quot;{searchText}&quot;</h1>
            {filteredMovies.length > 0 ? (
                <div className="z-10 max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredMovies.map(movie => <Card key={movie.id} movie={movie} />)}
                </div>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}

export default SearchResults;
