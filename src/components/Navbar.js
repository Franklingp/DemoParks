import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Navbar.css";

const Navbar = (props) => {
    return(
        <header>
            <nav className="navbar">
                <Link to="/" className="nav-item">Washingtong DC parks</Link>
                <Link to="/login" className="nav-item">Login</Link>
            </nav>
        </header>
    )
}

export default Navbar;