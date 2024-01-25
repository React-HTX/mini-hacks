import React, { useState } from 'react';
import movieData from './utils/movieData.json'; // Import your JSON data

const SortPage = () => {
    const [movies, setMovies] = useState(movieData.results);
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'; // Base URL for images

    const sortMoviesDesc = () => {
        const sortedMovies = [...movies].sort((a, b) => b.title.localeCompare(a.title));
        setMovies(sortedMovies);
    };

    const sortMoviesAsc = () => {
        const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
        setMovies(sortedMovies);
    };

    return (
        <main className="flex bg-white min-h-screen flex-col items-center justify-between p-24">
            <div className="mb-8">
                <button
                    onClick={sortMoviesDesc}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                >
                    Sort Z-A
                </button>
                <button
                    onClick={sortMoviesAsc}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sort A-Z
                </button>
            </div>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {movies.map(movie => (
                        <div key={movie.id} className="shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img
                                src={IMAGE_BASE_URL + movie.poster_path}
                                alt={movie.title}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-black text-xl font-semibold">{movie.title}</h3>
                            <p className="text-gray-600 overflow-auto h-20">{movie.overview}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default SortPage;


