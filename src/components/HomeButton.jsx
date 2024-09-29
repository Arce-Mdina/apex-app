import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {

    let navigate = useNavigate();

    return (
        <div className="back-button">
            <button onClick={() => navigate('/')}>
                <span style={{ color: "dodgerblue" }}>&#x2190;</span>&nbsp;<span style={{ color: "black" }}>Home</span>
            </button>
        </div>
    );
};

export default HomeButton;