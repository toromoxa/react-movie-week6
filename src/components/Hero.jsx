import React, {useEffect, useState }from 'react'
import axios from 'axios';
import Nav from './Nav'
import SearchBar from './SearchBar'
import Movies from './Movies'
import LoginModal from './LoginModal';
import Footer from './Footer';


// c24e8ce7 OMDB key 
// http://www.omdbapi.com/?apikey=[yourkey]& - template

// http://www.omdbapi.com/?s=${moviename}&apikey=c24e8ce7& - general movie info
// http://www.omdbapi.com/?i=${imdbID}&apikey=c24e8ce7& -detailed movie info
// https://www.omdbapi.com/?apikey=c24e8ce7&t=jaws&plot=full
// https://www.omdbapi.com/?apikey=c24e8ce7&t=${searchTerm}&plot=full

const Hero = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = (movieTitle) => {
        setSearchTerm(movieTitle);
    }
    
    async function fetchMovies() {
        try {
            const { data } = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=c24e8ce7&`)
            setMovies(data.Search);
        } catch (error) {
            setError(error.message);
            console.error('Error fetching data:', error);
        }
    }
    
    useEffect(() => {
        fetchMovies();
        console.log(movies)
    }, [])

    if (error) {
        return <div>{error}</div>;
    }

  return (
    <div>
        <Nav />
        <div className='landing__space'>
            <SearchBar 
            onSearch={handleInputChange}
            fetchMovies={fetchMovies}/>
            <Movies
            searchTerm={searchTerm}
            movies={movies} />
        </div>
        <Footer />
    </div>
  )
}

export default Hero