import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import LoadingH1 from '../components/Lodiang';

function Home() {
  // Movie App
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        // movie api
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`,
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingH1 />
      ) : (
        <div className="container">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              genres={movie.genres}
              rating={movie.rating}
              runtime={movie.runtime}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
