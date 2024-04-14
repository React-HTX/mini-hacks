// Card.js

import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ movie, onCardClick, isSelected }) => {
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
    const cardStyle = isSelected ? "shadow-md rounded-lg p-4 cursor-pointer border-2 border-red-500" : "shadow-md rounded-lg p-4 cursor-pointer";
    return (
        <div onClick={onCardClick} className={cardStyle}>
            <img src={IMAGE_BASE_URL + movie.poster_path} alt="" className="w-full h-46 object-cover rounded-lg" />
            <div className="mt-4">
                <h5 className="text-black text-2xl font-semibold">{movie.title}</h5>
                <p className="text-gray-600 overflow-auto h-20">{movie.overview}</p>
                <Link to={"/movies/" + movie.id}>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go to Details Page
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;

