import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import MovieCard from './Components/MovieCard';
import { fetchMovies } from './Apis/data.js';
import { Spinner } from '@chakra-ui/react';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const results = await fetchMovies(query);
      setMovies(results);
    } catch (error) {
      setError('Failed to fetch movies');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen text-center flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-black mt-5 animate-bounce">Vaapas Assignment - Movie Search Application</h3>
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="text-center mt-5 mb-5">Loading...</p>}
        {loading && (
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        )}
        {error && <p className="text-center mt-10 text-red-500">{error}</p>}

        {!loading && (
          <div className="flex flex-wrap justify-center my-10">
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        )}
      </div>
      <footer className="text-center text-lg italic text-black py-4 mt-auto bg-[#52939050]">
        <h3>
          <a href='https://www.linkedin.com/in/gurusainandanavvaru/' target='_blank' >
            Developed by A Guru Sai Nandan
          </a></h3>
      </footer>
    </div>
  );
};

export default App;
