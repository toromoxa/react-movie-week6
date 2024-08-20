import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "./Skeleton";

const GiantMovieCard = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState("");

  async function fetchMovieDetails() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?i=${id}&apikey=c24e8ce7&`
    );
    setMovieDetails(data);
    console.log(data);
  }

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  // if (!movieDetails) {
  //     return (
  //         <><Skeleton /></>
  //     )
  // }

  return (
    <div className="bigmovie__landing">
      <div className="bigmovie__tile">
        <figure className="bigmovie__img--box">
          <img
            className="bigmovie__img"
            src={movieDetails.Poster}
            alt="movie poster"
          />
        </figure>
        <div className="horizontal__break"></div>
        <div className="bigmovie__info--box">
          <h2 className="bigmovie__title">{movieDetails.Title}</h2>
          <h5 className="runtime">{movieDetails.Runtime}</h5>
          <h5 className="genre">{movieDetails.Genre}</h5>
          <p className="plot">{movieDetails.Plot}</p>
          <h5 className="actors">Starring: {movieDetails.Actors}</h5>
          <h5 className="director">Directed by: {movieDetails.Director}</h5>
          <h3 className="rated">{movieDetails.Rated}</h3>
          <h3 className="year">{movieDetails.Year}</h3>
        </div>
      </div>
    </div>
  );
};

export default GiantMovieCard;
