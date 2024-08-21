import React, {useEffect, useState} from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
import MovieFilter from './MovieFilter'

const Movies = ({ searchTerm, movies = [] }) => {
  const [sortedMovies, setSortedMovies] = useState(movies);
  const [sortType, setSortType] = useState('releaseDate');

  useEffect(() => {
    const sortMovies = () => {
      if (!Array.isArray(movies) || movies.length === 0) {
        // If movies is not an array or is empty, don't sort
        return;
      }
      let sortedArray = [...movies];
      if (sortType === 'releaseDate') {
        sortedArray.sort((a, b) => new Date(b.Year) - new Date(a.Year));
        console.log('sorting by Year released')
      } else if (sortType === 'title') {
        sortedArray.sort((a, b) => a.Title.localeCompare(b.Title));
        console.log('sorting by Title A-Z')
      } else if (sortType === 'runtime') {
        sortedArray.sort((a, b) => parseInt(a.Runtime) - parseInt(b.Runtime));
        console.log('sorting by movie length')
      }
      setSortedMovies(sortedArray);
    };

    sortMovies();
  }, [movies, sortType]);

  const handleFilterChange = (filterValue) => {
    setSortType(filterValue);
  };

  return (
    <div>
      <section className="movies">
        <div className="movie__tile--container">
          <div className="movie__tile--row">
            <h1 className="movies__found">Search Results for: {searchTerm}</h1>
            <MovieFilter onFilterChange={handleFilterChange} />
          </div>
          <div className="movies__results">
            {movies ? (
              sortedMovies.slice(0, 6).map((movie) => (
                <Link
                  to={`/movie/${movie.imdbID}`}
                  key={movie.imdbID}
                  className="movie"
                >
                  <div className="movie__tile">
                    <figure className="movie__img--box">
                      <img
                        className="movie__img"
                        src={movie.Poster}
                        alt="movie poster"
                      />
                    </figure>
                    <div className="horizontal__break"></div>
                    <div className="movie__info--box">
                      <h2 className="movie__title">{movie.Title}</h2>
                      <h3 className="year">{movie.Year}</h3>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <Skeleton />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies;
