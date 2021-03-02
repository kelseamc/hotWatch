import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({movie}) {

    return (
        <div className="movie-card">
            <Link to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={`${movie.title}`} />
            <div className="over-movie-card">
                <h2>{movie.title}</h2>
                <p>Release Date: {movie.release_date}</p>
            </div>
            </Link>
        </div>
    )
}

export default MovieCard
