import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import BookTicket from '../BookTicket/BookTicket';
import './Summary.css'
const Summary = () => {
    const movie = useLoaderData()
    const {name, summary, type, url} = movie
    const [bookTicket, setBookTicket] = useState('')
    return (
        <div className='summary-container'>
            <h1 className='summary-title'>Name of the movie {name}</h1>
            <p><strong>Summary:</strong>{summary}</p>
            {
                type && <p><strong>Movie type:</strong> {type}</p>
            }
            {
                url && <a href={url}>see the movie</a>
            }
            <button onClick={() => setBookTicket(movie)} className='details-btn' data-bs-toggle="modal" data-bs-target="#book-ticket">Book Ticket </button>
            <BookTicket key={movie.id} bookTicket = {bookTicket} setBookTicket = {setBookTicket}></BookTicket>
        </div>
    );
};

export default Summary;