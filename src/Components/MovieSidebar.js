import React from "react";
import { Link } from "react-router-dom";
import "./MovieSideBar.css"


const MovieSideBar = (props)=> {

    const { movieList } = props

    return <div className="movie-sidebar">
        <h2>Movie Sidebar</h2>
        { movieList.map( (movie, index)=> {
            return (<Link key={index} to={`/movies/${movie.Title}`}>{movie.Title}</Link>)
        } ) }

    </div>
}

export default MovieSideBar;