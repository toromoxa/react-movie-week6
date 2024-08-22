import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonMovieCard = () => {
  return (
    <div className="movie">
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
    </div>
  );
};

export default SkeletonMovieCard;
