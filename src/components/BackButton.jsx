import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const historyStack = useRef([]); // Track history manually

    useEffect(() => {
        // Add the current location to the history stack on each page visit
        historyStack.current.push(location.pathname);

        // Limit history stack size to prevent memory issues
        if (historyStack.current.length > 50) {
            historyStack.current.shift();
        }
    }, [location]);

    const handleBackClick = () => {
        if (historyStack.current.length < 2) {
            // If there is no meaningful history, go to the homepage
            navigate('/');
            return;
        }

        // Check if there is a loop pattern (last two paths are the same)
        const lastPath = historyStack.current[historyStack.current.length - 1];
        const secondLastPath = historyStack.current[historyStack.current.length - 2];
        const currentPath = historyStack.current[historyStack.current.length]

        if (lastPath === secondLastPath) {
            // If a looping pattern is detected, go to the homepage
            navigate('/');
        } else if (currentPath === secondLastPath) {
            navigate('/');
        } else {
            // Otherwise, navigate back to the previous page
            navigate(-1);
        }
    };

    return (
        <div className={`back-button`}>
            <Icon
                icon={faArrowLeft}
                className="home-btn"
                onClick={handleBackClick}
                style={{ fontSize: 40 }}
            />
        </div>
    );
};

export default BackButton;