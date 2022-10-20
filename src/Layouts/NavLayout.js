import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

const NavLayout = ()=> {

    return (
        <div className="nav-layout">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default NavLayout;