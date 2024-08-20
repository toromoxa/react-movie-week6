import React from "react";
import Skeleton from './Skeleton'

const Movies = ({ searchTerm, movies }) => {

  return (
    <div>
      <section className="movies">
        <div className="movie__tile--container">
          <div className="movie__tile--row">
            <h1 className="movies__found">Search Results for: {searchTerm}</h1>
          </div>
          <div className="movies__results">
            {movies
            ? (
            movies.slice(0, 6).map((movie) => (
                <div className="movie" key={movie.imdbID}>
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
                      <h6>{movie.imdbID}</h6>
                    </div>
                  </div>
                </div>
              )))
              :
              (
                <>
                <Skeleton />
                </>
              )
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies;
