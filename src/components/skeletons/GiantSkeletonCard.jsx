import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from './Shimmer'
import "./Skeletons.css";

const GiantSkeletonCard = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="bigmovie__tile">
        <figure className="bigmovie__img--box">
          <SkeletonElement type="poster" />
        </figure>
        <div className="bigmovie__info--box">
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default GiantSkeletonCard;
