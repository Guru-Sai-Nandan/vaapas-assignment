// src/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            setError('');
            onSearch(query);
        } else {
            setError('Please enter a movie name.');
        }
    };

    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="flex justify-center mt-5">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                    type="submit"
                    className="ml-4 p-1 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                    Search
                </button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default SearchBar;
