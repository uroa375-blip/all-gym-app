import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/setting.css';

const Setting = () => {
    const navigate = useNavigate();

    return (
        <div className="setting-container">
            <div className="content">
                <h1 className="main-text">
                    잠깐,<br />
                    귀하께<br />
                    <span className="highlight">딱 맞는</span><br />
                    <span className="highlight">운동시설</span>을 위해<br />
                    몇 가지만<br />
                    알려주세요!
                </h1>
            </div>

            <div className="bottom-actions">
                <button className="start-btn" onClick={() => navigate('/gender')}>START</button>
                <button className="skip-btn" onClick={() => navigate('/menu')}>건너 뛰기</button>
            </div>
        </div>
    );
};

export default Setting;
