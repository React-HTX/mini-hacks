import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchResults from './searchResults';
import { getMovies } from './utils/request';

function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            if (query) {
                const fetchedMovies = await getMovies(query);
                setMovies(fetchedMovies);
            }
        };

        fetchMovies();
    }, [query]);

    return (
        <SearchResults searchText={query} movies={movies} />
    );
}

export default SearchPage;

