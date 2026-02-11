import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Intro.css';
const logoImg = '/img/logo.svg';

const Intro = () => {
    const navigate = useNavigate();

    return (
        <div className="intro-container" onClick={() => navigate('/onboarding')}>
            <div className="logo-wrapper">
                <img src={logoImg} alt="ALL GYM Logo" className="logo-image" />
            </div>

            <div className="tagline">
                <p>내가 찾던 최적의 운동 시설</p>
            </div>
        </div>
    );
};

export default Intro;
