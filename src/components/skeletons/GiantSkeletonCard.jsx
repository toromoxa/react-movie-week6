import React from 'react';
import SkeletonElement from './SkeletonElement';

const GiantSkeletonCard = () => {
  return (
    <div className="bigmovie__tile">
        <figure className="bigmovie__img--box">
          <SkeletonElement type='poster' />
        </figure>
        <div className="bigmovie__info--box">
          <SkeletonElement type='title' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
        </div>
      </div>
  );
};

export default GiantSkeletonCard;