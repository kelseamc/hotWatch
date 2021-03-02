import React from 'react'
import { Link } from 'react-router-dom'
import MovieReviews from './MovieReviews'
import SimilarMovies from './SimilarMovies'

function Movie({movie}) {

    return (
        <section className="movie-details-page" style={{backgroundImage:`url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path}')`}}>
          <Link to="/" exact="true">
            <div className="back-arrow-text">
              {/* <img className="arrow" src={arrow} alt="back-arrow"/> */}
              <p className="back-movies-text">Back</p>
            </div>
          </Link>
            <div className="movie-details-container">
              <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.title} />
              <div className="movie-details-text">
                <h2>{movie.title}</h2>
                <small>{movie.runtime} min</small>
                <p className="movie-rating-text">{`${movie.vote_average} / 10`}</p>
                <p className="movie-overview-text">{movie.overview}</p>
              </div>
            </div>
            <div className="bottom-details">
              <MovieReviews movieId={movie.id}/>
              <SimilarMovies movieId={movie.id} />
            </div>
    </section>
  
    )
}

export default Movie
