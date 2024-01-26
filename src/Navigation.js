import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim()) {
            navigate(`/movies/search?query=${searchText.trim()}`);
        }
    }

    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">Movie Listings App</Link>

                <ul className="flex flex-col text-white md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
                    <li><Link to="/sortPage" className="hover:text-blue-200">Sort Page</Link></li>
                    <li><Link to="/counter" className="hover:text-blue-200">Counter Page</Link></li>
                    {/* Add more links as needed */}
                </ul>

                <form onSubmit={handleSubmit}>
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
    );
};

export default Navigation;

