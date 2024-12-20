import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
    

    let navigate = useNavigate();

    return (
        <>
            <div className={`back-button`}>
                {/* <button>
                    <span style={{ color: "dodgerblue" }}>&#x2190;</span>&nbsp;<span style={{ color: "black" }}>Home</span>
                </button> */}
                <Icon icon={faArrowLeft} className="home-btn" onClick={() => navigate('/')} style={{ fontSize: 40 }}/>
            </div>
        </>
    );
};

export default BackButton;