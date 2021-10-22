import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './Profile';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Recipes</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse btn-pos" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {isAuthenticated ? (<Profile />) : (
                            <a className="nav-link active" onClick={() => loginWithRedirect()}> Login</a>
                        )}
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar;