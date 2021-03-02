import React, { useEffect, useState } from 'react'
import {API_KEY} from '../key'
import Review from './Review'

function MovieReviews({movieId}) {
    const[reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        .then((r) => r.json())
        .then((data) => {
            setReviews(data.results)
        })
    },[movieId])

    return (

       <div className="reviews-container">
            <h2>Reviews</h2>
            {reviews ? reviews.map((r) => <Review key={r.id} review={r} />) : <h2>Sorry, No One Has Reviewed This Yet</h2>}
        </div>
    )
}

export default MovieReviews
