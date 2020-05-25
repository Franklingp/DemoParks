import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./styles/Navbar.css";

const Navbar = (props) => {
    return(
        <header>
            <nav className="navbar">
                <Link to="/" className="nav-item">Washingtong DC parks</Link>
                {
                    props.auth.isAuth === false && <Link to="/login" className="nav-item">Login</Link>
                }
                {
                    props.auth.isAuth === true && <Link to="/user" className="nav-item">User</Link>
                }
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Navbar);