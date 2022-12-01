import React from 'react';
import './SingleMovie.css'
const SingleMovie = ({movie}) => {
    const {score, show} = movie
    console.log(show)
    const {image, name, language} = show
    return (
        <div className='movie-inner'>
            <img src={image.medium} alt="" />
            <div>
                <h1 className='movie-name'>{name}</h1>
            </div>
        </div>
    );
};

export default SingleMovie;