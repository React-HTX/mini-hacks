"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

// Create heading component

const Header = () => {
    const [searchText, setSearchText] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchText) {
            router.push(`/movies/search?query=${searchText}`);
        }
    }

    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="text-white text-2xl font-bold" href="/">Movie Listings App</Link>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="relative flex-wrap items-center">
                        <input
                            onChange={e => setSearchText(e.target.value)}
                            type="text"
                            placeholder="Search"
                            className="bg-gray-200 text-black p-2 pl-8 rounded-full focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button type="submit" className="bg-blue-700 text-white px-4 py-2 ml-4 rounded-full hover:bg-blue-600">Search</button>
                    </div>
                </form>
            </div>
        </nav>
    )
};

export default Header;