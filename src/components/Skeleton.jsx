import React from "react";

const Skeleton = ({ index }) => {
  return (
      <div key={index}>
        <div className="skeleton-card">
          <div className="skeleton">
            <div className="skeleton-poster"></div>
            <div className="skeleton-description"></div>
          </div>
        </div>
      </div>
  );
};

export default Skeleton;
