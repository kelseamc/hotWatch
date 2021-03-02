import React, { useEffect, useState } from 'react'
import { API_KEY } from "../key"
import MovieCard from './MovieCard'

function MovieListContainer() {
    const [movies, setMovies] = useState()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then((r) => r.json())
        .then((data) => {
            setMovies(data.results)
        })
    }, [])


    return (

        <div className="movies-container">
            {movies ? movies.map((mov) => <MovieCard key={mov.id} movie={mov} /> ) : null }

        </div>
    )
}

export default MovieListContainer
