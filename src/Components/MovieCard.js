import React, { useEffect, useState } from 'react';
import { fetchRandomDogImage } from '../Apis/data';

const MovieCard = ({ movie }) => {
    const [dogImage, setDogImage] = useState('');

    useEffect(() => {
        const getDogImage = async () => {
            const image = await fetchRandomDogImage();
            setDogImage(image);
        };
        getDogImage();
    }, []);

    return (
        <div className="max-w-xs w-full rounded overflow-hidden shadow-lg m-4 transform hover:scale-105 transition duration-500 ease-in-out">
            <img className="w-full h-56 object-cover" src={dogImage} alt="Dog" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movie.title}</div>
                <p className="text-gray-700 text-base">
                    {movie.author_name ? movie.author_name[0] : 'Unknown author'}
                </p>
                <p className="text-gray-700 text-base">
                    {movie.first_publish_year || 'Unknown year'}
                </p>
            </div>
        </div>
    );
};

export default MovieCard;
