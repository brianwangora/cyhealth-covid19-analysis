import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar bg-grey">
            <div className="container-fluid">
                <Link className="nav-link" to="/">| HOME | </Link>
                <Link className="nav-link" to="/graph">| HOURLY GRAPH | </Link>
                <Link className="nav-link" to="/statistics">| STATISTICS |</Link>
            </div>
        </nav>
    )
}