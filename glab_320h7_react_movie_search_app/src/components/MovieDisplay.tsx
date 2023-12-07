import React from 'react';

interface MovieProps {
    movie: {
        Title: string;
        Genre: string;
        Poster: string;
        Year: string;
    } | null;
}

const MovieDisplay: React.FC<MovieProps> = ({ movie }) => {

 if (!movie) {
    return null;
  }

  return (
    <div className="movie-display">
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
    </div>
  );
};

export default MovieDisplay;
