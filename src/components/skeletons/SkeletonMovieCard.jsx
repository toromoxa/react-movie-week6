import React from "react";
import SkeletonElement from "./SkeletonElement";
import "./Skeletons.css";
import Shimmer from "./Shimmer";

const SkeletonMovieCard = () => {
  return (
    <div className="movie">
      <div className="skeleton-wrapper">
        <div className="movie__tile">
          <figure className="movie__img--box">
            <SkeletonElement type="card" />
          </figure>
          <div className="horizontal__break"></div>
          <div className="movie__info--box">
            <SkeletonElement type="title" />
            <SkeletonElement type="text" />
          </div>
        </div>
      <Shimmer />
      </div>
    </div>
  );
};

export default SkeletonMovieCard;
