import React from 'react'

const MovieFilter = ({ onFilterChange }) => {
  return (
    <div className="movie-filter">
      <label htmlFor="sort" className='filter--label'>Sort by: </label>
      <select className='resultsFilter' id="sort" onChange={(e) => onFilterChange(e.target.value)}>
        <option value="releaseDate">Release Date</option>
        <option value="title">Title (A-Z)</option>
        <option value="runtime">Runtime</option>
      </select>
    </div>
  );
};

export default MovieFilter;