import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const HomeButton = () => {

    let navigate = useNavigate();

    return (
        <>
            <div className="back-button">
                {/* <button>
                    <span style={{ color: "dodgerblue" }}>&#x2190;</span>&nbsp;<span style={{ color: "black" }}>Home</span>
                </button> */}
                <Icon icon={faArrowCircleLeft} className="home-btn" onClick={() => navigate('/')} style={{ fontSize: 30 }}/>
            </div>
        </>
    );
};

export default HomeButton;