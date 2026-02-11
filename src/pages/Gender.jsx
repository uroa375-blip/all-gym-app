import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Gender.css';

const Gender = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    return (
        <div className="gender-container">
            <div className="top-content">
                <h1 className="page-title">성별을 알려주세요</h1>
                <p className="page-desc">성별에 맞춰 운동 시설을 추천해 드립니다.</p>
            </div>

            <div className="gender-selection">
                <div className="selection-group">
                    <button 
                        className={`gender-btn female ${selected === 'female' ? 'active' : ''}`}
                        onClick={() => setSelected('female')}
                    >
                        <img src="/assets/female-icon.png" alt="female" className="gender-icon" />
                        <span className="label">FEMALE</span>
                    </button>
                </div>

                <div className="selection-group">
                    <button 
                        className={`gender-btn male ${selected === 'male' ? 'active' : ''}`}
                        onClick={() => setSelected('male')}
                    >
                        <img src="/assets/male-icon.png" alt="male" className="gender-icon" />
                        <span className="label">MALE</span>
                    </button>
                </div>
            </div>

            <div className="bottom-action">
                <button 
                    className="next-btn" 
                    disabled={!selected}
                    onClick={() => navigate('/age')}
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default Gender;
