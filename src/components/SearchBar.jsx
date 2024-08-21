import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch, fetchMovies }) => {
    const [input, setInput] = useState('');
    
    const handleInputChange = (event) => {
        const movieTitle = event.target.value;
        setInput(movieTitle);
        onSearch(movieTitle);
    }

    function clickSearchBtn() {
        fetchMovies()
        console.log('button clicked')
    }

  return (
    <div>
        <div className="search__container">
            <div className="search__header">
                <h1 className="header__title">Movie night, made easy.</h1>
                <div className="search__input--wrapper">
                    <input 
                        className='movie__search'
                        type="text" 
                        placeholder='Search by movie title...'
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                fetchMovies()
                                console.log('enter pressed')
                            }
                        }}
                        />
                    <button 
                    className='btn--search'
                    onClick={() => clickSearchBtn()}
                    ><SearchIcon sx={{ fontSize: 50 }} className='click' /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar