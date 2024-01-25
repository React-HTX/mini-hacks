import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getTrendingMovies } from './utils/request';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const trendingMovies = await getTrendingMovies();
            setMovies(trendingMovies);
        };

        fetchMovies();
    }, []);

    return (
        <main className="flex bg-white min-h-screen flex-col items-center justify-between p-24">
            <h1 className='flex text-black text-2xl font-semibold'>Top Trending Movies</h1>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {movies.map(movie => {
                        return <Card key={movie.id} movie={movie} />
                    })}
                </div>
            </div>
        </main>
    );
};

export default Home;
