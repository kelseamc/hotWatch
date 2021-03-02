import React from 'react'
import { Link } from 'react-router-dom'

function SimilarCard({movie}) {
    return (
        
         <div className="similar-card">
            <Link to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={`${movie.title}`} />
            <div className="similar-over-movie-card">
                <p>    </p>
            </div>
            </Link>
        </div>
       
    )
}

export default SimilarCard
