import React, { useEffect, useState } from 'react';
import SingleMovie from './SingleMovie';
import './Movie.css'
const Movie = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    return (
        <div>
            <h3 className='movie-title'>Our all movie</h3>
            <div className='movie-container'>
                {
                    movies.map(movie => <SingleMovie 
                        key={movie?.show.id}
                        movie = {movie}
                    ></SingleMovie>)
                }
            </div>
        </div>
    );
};

export default Movie;