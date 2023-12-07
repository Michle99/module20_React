import { useState, useEffect } from 'react';
import './App.css'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'

interface MovieData {
  Title: string;
  Genre: string;
  Poster: string;
  Year: string;
}

const movieTitles = [
  'Inception',
  'The Shawshank Redemption',
  'Pulp Fiction',
  'The Godfather',
  'Fight Club',
  'Up',
  'Pixar',
  'Gone Girl'
];

// Get random movie titles
function getRandomTitle(): string {
  const randomIndex = Math.floor(Math.random() * movieTitles.length);
  return movieTitles[randomIndex];
}

function App() {
  // API KEY
  const apiKey = import.meta.env.VITE_OMDB_API_kEY;

  const [movie, setMovie] = useState<MovieData | null>(null);

  const getMovie =async (searchterm:string) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchterm}`
      );
      
      const movieData = await response.json();
      console.log("Movie Data:", movieData)
      setMovie(movieData);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  }

  const getRandomMovie = async () => {
    const randomMovieTitle = getRandomTitle();
    await getMovie(randomMovieTitle);
  };

  // Fetch default movie on first render
  useEffect(() => {
    getRandomMovie();
  }, []);

  return (
    <div>
        <Form moviesearch={getMovie}/>
        <MovieDisplay movie={movie} />
    </div>
  )
}

export default App