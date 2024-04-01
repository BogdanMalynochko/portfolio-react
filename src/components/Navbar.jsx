import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="container">
            <Link to="/" className="header--logo">
                Bogdan <span>.</span>
            </Link>
            <ul className="header--wrapper">
                <Link to="/" className="header--link">
                    Home
                </Link>
                <Link to="/projects" className="header--link">
                    All Projects
                </Link>
            </ul>
        </header>
    );
};

export default Navbar;
