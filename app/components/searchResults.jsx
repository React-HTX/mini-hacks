"use client"

import { useEffect, useState } from "react";
import Card from "./Card";

function SearchResults({ searchText, movies }) {
    const [filteredMovies, setfilteredMovies] = useState(movies);

    useEffect(() => {
        setfilteredMovies(movies)
    }, [movies]);

    return (
        <div>
            <div className="flex bg-white min-h-screen flex-col items-center justify-between p-24">
                <div className="flex">
                    <h1 className="text-black">Top Search Results for &quot;{searchText}&quot;</h1>
                </div>
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredMovies.map(movie => {
                            return <Card key={movie.id} movie={movie} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SearchResults