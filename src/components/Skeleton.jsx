import React from "react";

const Skeleton = () => {
  return (
    new Array(6).fill(0).map((_, index) => (
      <div key={index}>
        <div className="skeleton-card">
          <div className="skeleton">
            <div className="skeleton-poster"></div>
            <div className="skeleton-description"></div>
          </div>
        </div>
      </div>)
  ))
};

export default Skeleton;
