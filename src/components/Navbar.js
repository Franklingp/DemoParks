import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Navbar.css";

const Navbar = (props) => {
    return(
        <header>
            <nav className="navbar">
                <div>Washingtong DC parks</div>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    )
}

export default Navbar;