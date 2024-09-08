import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = ({ message }) => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="error">
            <h1>Error</h1>
            <p>{message}</p>
            <button onClick={handleGoHome}>Go to Home</button>
        </div>
    );
};

export default Error;