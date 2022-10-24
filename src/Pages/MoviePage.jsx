import React from "react";
import { useParams } from "react-router-dom";


const MoviePage = (props)=> {

    const params = useParams()

    const title = params.title

    const {movieList} = props

    const foundMovie = movieList.find((movie)=>{
        return movie.Title === title
    })


    return (
        <div className="movie-page">
            <h1>Movie Page</h1>
            <h3>{foundMovie.Title}</h3>
            <p>Director: {foundMovie.Director}</p>
            <p>Actors: {foundMovie.Actors}</p>
            <p>Plot: {foundMovie.Plot}</p>
        </div>
    )
}

export default MoviePage;