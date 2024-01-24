import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getTrendingMovies } from '../utils/requests';

const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const fetchedMovies = await getTrendingMovies();
            setMovies(fetchedMovies);
        };
        fetchMovies();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map(movie => <Card key={movie.id} movie={movie} />)}
        </div>
    );
};

export default TrendingMovies;
