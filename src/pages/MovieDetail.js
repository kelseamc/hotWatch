import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { API_KEY } from '../key'
import { NotFound } from '../AsyncHandler/NotFound'
import { Loading } from '../AsyncHandler/Loading'

import Movie from '../components/Movie'

export const MovieDetail = () =>  {
    const { movieID } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`)
        .then((r) => r.json())
        .then((data) => {
            setMovie(data)
            console.log(data)
        })
    }, [movieID])

    if(movie.success === false) {
        return (
          <NotFound />
        )
      } else if (movie.id === undefined) {
        return (
          <Loading />
        )
      } else {
        return (
          <Movie movie={movie} />
          )
        }
   
}


