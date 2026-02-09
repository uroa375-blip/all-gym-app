import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Intro.css';
import logoImg from '../assets/logo.svg';

const Intro = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/onboarding');
    };

    return (
        <div className="intro-body">
            <div className="intro-container" onClick={handleClick}>
                <div className="logo-wrapper">
                    <img src={logoImg} alt="ALL GYM Logo" className="logo-image" />
                </div>

                <div className="tagline">
                    <p>내가 찾던 최적의 운동 시설</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
