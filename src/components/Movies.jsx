import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieFilter from "./MovieFilter";
import SkeletonMovieCard from "./skeletons/SkeletonMovieCard";

const Movies = ({ searchTerm, movies = [] }) => {
  const [sortedMovies, setSortedMovies] = useState(movies);
  const [sortType, setSortType] = useState("releaseDate");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sortMovies = () => {
      
      if (!Array.isArray(movies) || movies.length === 0) {
        // If movies is not an array or is empty, don't sort
        setLoading(true);
        console.log('loading is true')
        return;
      }

      let sortedArray = [...movies];
      if (sortType === "releaseDate") {
        sortedArray.sort((a, b) => new Date(b.Year) - new Date(a.Year));
        console.log("sorting by Year released");
      } else if (sortType === "title") {
        sortedArray.sort((a, b) => a.Title.localeCompare(b.Title));
        console.log("sorting by Title A-Z");
      } else if (sortType === "runtime") {
        sortedArray.sort((a, b) => parseInt(a.Runtime) - parseInt(b.Runtime));
        console.log("sorting by movie length");
      }
      setSortedMovies(sortedArray);
    };

    sortMovies();
  }, [movies, sortType]);

  const handleFilterChange = (filterValue) => {
    setSortType(filterValue);
  };

  return (
    <section className="movies">
      <div className="results--container">
        <div className="filter--row">
          <div className="found__container">
            <h1 className="movies--found">Search Results for:</h1>
            <p className="search-title">{searchTerm}</p>
            <MovieFilter onFilterChange={handleFilterChange} />
          </div>
        </div>
        <div className="movies__results">
          {loading && <SkeletonMovieCard />}
          {loading
            ? new Array([6]).map((card) => <SkeletonMovieCard key={card} />)
            : sortedMovies.slice(0, 6).map((movie) => (
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
              ))}

          {/* {movies
            ? sortedMovies.slice(0, 6).map((movie) => (
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
            : loading &&
              new Array([6]).map((card) => <SkeletonMovieCard key={card} />)} */}
        </div>
      </div>
    </section>
  );
};

export default Movies;
