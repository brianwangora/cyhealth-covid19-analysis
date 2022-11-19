import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="container-fluid">
                <Link className="nav-link" to="/">
                    <div className='logo'>
                        <a href='/'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJIi61ap-084bRbgHTgRIxAahjoHVDieeafHDzSpR&s' className='cytonn_logo' alt="cytonn-logo"/>
                        </a>
                    </div>
                </Link>
                <Link className="nav-link" to="/">HOME</Link>
                <Link className="nav-link" to="/graph">HOURLY GRAPH</Link>
                <Link className="nav-link" to="/statistics">STATISTICS</Link>
            </div>
        </nav>
    )
}