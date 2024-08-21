import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
        <div className="bigmovie__info--box">
          <h2 className="bigmovie__title">{movieDetails.Title}</h2>
          <p className="plot">{movieDetails.Plot}</p>
          <span className="actors">Starring: {movieDetails.Actors}</span>
          <span className="director">Directed by: {movieDetails.Director}</span>
          <span className="rated">Rated: {movieDetails.Rated}</span>
          <span className="runtime">{movieDetails.Runtime}</span> <span className="genre">{movieDetails.Genre}</span>
          <span className="year">Released: {movieDetails.Year}</span>
        </div>
      </div>
      <div className="movie__actions">
        <button className="action-btn"><PlayCircleOutlineIcon sx={{ fontSize: 50 }} /></button>
        <button className="action-btn"><FavoriteIcon sx={{ fontSize: 50 }} /></button>
        <button className="action-btn"><ShareIcon sx={{ fontSize: 50 }} /></button>
        <button className="action-btn"><ThumbUpIcon sx={{ fontSize: 50 }} /></button>
        <button className="action-btn"><ThumbDownIcon sx={{ fontSize: 50 }} /></button>
      </div>
    </div>
  );
};

export default GiantMovieCard;
