import React from "react";
import { Outlet } from "react-router-dom";
import MovieSideBar from "../Components/MovieSidebar";


const MovieLayout = (props)=> {

    return <div className="movie-layout">
        <MovieSideBar movieList={props.movieList}/>
        <div className="movie-content">
            <Outlet />
        </div>

    </div>
}

export default MovieLayout;