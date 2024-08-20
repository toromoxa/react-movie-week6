import React, { useEffect, useState } from "react";
import poster from '../assets/01_jaws_main_0-121374237.jpg'
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
                <div className="movie">
                <div className="movie__tile">
                  <figure className="movie__img--box">
                    <img
                      className="movie__img"
                      src={poster}
                      alt="movie poster"
                    />
                  </figure>
                  <div className="horizontal__break"></div>
                  <div className="movie__info--box">
                    <h2 className="movie__title">TITLE</h2>
                    <h3 className="year">YEAR</h3>
                    <h4>imdbID</h4>
                  </div>
                </div>
              </div>

            {/* {loading 
            ? new Array(6).fill(0).map((_, index) =>(
                <Skeleton
                index={index} />
            ))
            : movies.map((movie, index) => (
                <div className="movie" key={index}>
                  <div className="movie__tile">
                    <figure className="movie__img--box">
                      <img
                        className="movie__img"
                        src={poster}
                        alt="movie poster"
                      />
                    </figure>
                    <div className="horizontal__break"></div>
                    <div className="movie__info--box">
                      <h2 className="movie__title">TITLE</h2>
                      <h3 className="year">YEAR</h3>
                      <h4>imdbID</h4>
                    </div>
                  </div>
                </div>
            ))
            } */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies;
