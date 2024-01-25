import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
    return (
        <div>
            <Link to={"/movies/" + movie.id}>
                <div className="shadow-md rounded-lg p-4">
                    <img src={IMAGE_BASE_URL + movie.poster_path} alt="" className="w-full h-46 object-cover rounded-lg" />
                    <div className="mt-4">
                        <h5 className=" text-black text-2xl font-semibold">{movie.title}</h5>
                        <p className="text-gray-600 overflow-auto h-20">{movie.overview}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
