import React, { useState, useEffect } from 'react'
import { API_KEY } from '../key'
import SimilarCard from './SimilarCard'


function SimilarMovies({movieId}) {
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        .then((r) => r.json())
        .then((data) => {
            setSimilar(data.results)
            console.log(data.results)
        })
    },[movieId])

    return (
        <div className="similar-container">
            <h2>Similar Movies</h2>
           {similar? similar.map((mov) => <SimilarCard key={mov.id} movie={mov} />) : null}
        </div>
    )
}

export default SimilarMovies
