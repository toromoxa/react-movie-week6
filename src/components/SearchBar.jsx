import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch, fetchMovies, setLoading }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    const movieTitle = event.target.value;
    setInput(movieTitle);
    onSearch(movieTitle);
  };

  function clickSearchBtn() {
    fetchMovies();
    setLoading(true)
    console.log("button clicked -- loading true");
  }

  return (
    <div className="search__container">
      <div className="search__header">
        <h1 className="header__title">Movie night, made easy.</h1>
        <div className="search__input--wrapper">
          <input
            className="movie__search"
            type="text"
            placeholder="Search by movie title..."
            value={input}
            onChange={handleInputChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                fetchMovies();
                setLoading(true)
                console.log("enter pressed -- loading is true");
              }
            }}
          />
          <button className="btn--search" onClick={() => clickSearchBtn()}>
            <SearchIcon sx={{ fontSize: 50 }} className="click" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
