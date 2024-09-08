import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}><Link to="/">Home</Link></li>
                <li style={liStyle}><Link to="/help">Help Center</Link></li>
                <li style={liStyle}><Link to="/create">Create Product</Link></li>

            </ul>
        </nav>
    );
};

const navStyle = {
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #e7e7e7',
};

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
};

const liStyle = {
    marginRight: '20px',
};

export default NavBar;
