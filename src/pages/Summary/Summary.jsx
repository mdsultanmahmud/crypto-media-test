import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Summary.css'
const Summary = () => {
    const movie = useLoaderData()
    console.log(movie)
    const {name, summary} = movie
    return (
        <div className='summary-container'>
            <h1 className='summary-title'>Name of the movie {name}</h1>
            <p><strong>Summary:</strong>{summary}</p>
        </div>
    );
};

export default Summary;