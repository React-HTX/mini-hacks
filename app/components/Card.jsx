import Link from "next/link";

const Card = ({ movie }) => {
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
    return (
        <div className="shadow-md rounded-lg p-4">
            <img src={IMAGE_BASE_URL + movie.poster_path} alt="" className="w-full h-46 object-cover rounded-lg" />
            <div className="mt-4">
                <h5 className="text-black text-2xl font-semibold">{movie.title}</h5>
                <p className="text-gray-600 overflow-auto h-20">{movie.overview}</p>
            </div>
            <Link href={"/movies/" + movie.id}>
                <button className="inline-block bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    Details
                </button>
            </Link>
        </div>
    );
};

export default Card;

