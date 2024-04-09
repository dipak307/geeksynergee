import React, { useState, useEffect } from 'react';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://hoblist.com/api/movieList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting'
      })
    })
    .then(response => response.json())
    .then(data => {
      // Handle the movie data
      console.log(data);
      setMovies(data.result);
    })
    .catch(error => {
      console.error('Error fetching movie data:', error);
    });
  }, []);

  return (
    <div>
    <h1 className={"justify-content:center"}>Movie List</h1>
    <div className="movies-container">
      {movies.map(movie => (
        <div key={movie._id} className="movie-card">
          <img src={movie.poster} alt={movie.title} />
          <div className='details'>
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Language: {movie.language}</p>
            <p>Director: {movie.director}</p>
            <button>Watch Trailer</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Home;




