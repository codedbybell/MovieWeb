import React from 'react'
import './Details.css'
import Movie from './Movie'

function Details({ movie, onClose }) {
    
    
    if (!movie) return null;
    return (
        <div className="movie-detail">
            <button onClick={onClose} className='close-button'><i className="fa-solid fa-arrow-left"></i></button>
            <h2>{movie.title}</h2>
            <img src={movie.img} alt={movie.title} />
            <div className="movie-info-group">
                <p><i className="fa-solid fa-star-half-stroke"></i> {movie.imbd}</p>
                <p><i className="fa-solid fa-calendar"></i> {movie.year}</p>
                <p><i className="fa-solid fa-clock"></i> {movie.time}</p>
            </div>
            <p className="movie-kind"><i className="fa-solid fa-film"></i> {movie.kind}</p>
            <p className="movie-description">{movie.description}</p>
        </div>
    )
}

export default Details