import React from 'react';

const BookTicket = ({ bookTicket, setBookTicket }) => {
    const {name, language, url, status } = bookTicket
    let bookingList =  JSON.parse(localStorage.getItem('MovieBookingList'))
    if(bookingList?.length > 0){
        bookingList = JSON.parse(localStorage.getItem('MovieBookingList'))
    }else{
        bookingList = []
    }
    const Handleticket = event =>{
        event.preventDefault()
        const form = event.target 
        const customerName = form.name.value 
        const email = form.email.value 
        const bookingMovie = {
            movieName: name, 
            customerName,
            email,
            movieURL: url,
            status,
            language            
        }
        // console.log(bookingMovie)
        bookingList.push(bookingMovie)
        localStorage.setItem('MovieBookingList', JSON.stringify(bookingList))
        form.reset()
        setBookTicket('')
    }
    return (
        <div>
            <div className="modal fade" id="book-ticket" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={Handleticket}>
                                <div className="mb-3">
                                    <label htmlFor="nameField" className="form-label">Your Name</label>
                                    <input name='name' type="text" className="form-control" id="nameField"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailField" className="form-label">Your Email</label>
                                    <input name='email' type="email" className="form-control" id="emailField"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Confirm</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTicket;