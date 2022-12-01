import React from 'react';
import './SingleMovie.css'
import { Link } from 'react-router-dom';
const SingleMovie = ({movie}) => {
    const {score, show} = movie
    const {image, name, language, network, id} = show
    return (
        <div className='movie-inner'>
            <img src={image.medium} alt="" />
            <div>
                <h1 className='movie-name'><strong>Movie Name:</strong> {name}</h1>
                <p><strong>Language:</strong>{language}</p>
                <p><strong>Country:</strong>{network?.country?.name}</p>
                <p><strong>Score:</strong> {score}</p>
                <Link style={{textDecoration:'none'}} to={`/summary/${id}`}><button className='details-btn'>Details</button></Link>
            </div>
        </div>
    );
};

export default SingleMovie;