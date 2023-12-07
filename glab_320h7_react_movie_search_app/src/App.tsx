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

  // Fetch default movie on first render
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
        <Form moviesearch={getMovie}/>
        <MovieDisplay movie={movie} />
    </div>
  )
}

export default App