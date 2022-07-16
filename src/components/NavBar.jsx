import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import './NavBar.css';

function NavBar(){
    return(
        <nav>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Research">Research</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Projects">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;