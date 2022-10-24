import React from "react";
import MovieCard from "../Components/MovieCard";

const MovieListPage = (props)=> {

    const {movieList} = props

    return <div className="movie-list-page">
        <h2>Movie List Page</h2>
        <div className="movie-list">
            { movieList.map((movie, index)=>{
                return <MovieCard key={index} movie={movie} />
            }) }
        </div>
    </div>
}

export default MovieListPage;