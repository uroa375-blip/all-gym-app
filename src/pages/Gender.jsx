import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Gender.css';

const Gender = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    return (
        <div className="gender-page-container">
            <div className="top-content">
                <h1 className="page-title">성별을 알려주세요</h1>
                <p className="page-desc">성별에 맞춰 운동 시설을 추천해 드립니다.</p>
            </div>

            <div className="gender-selection">
                <button 
                    className={`gender-btn ${selected === 'female' ? 'active' : ''}`}
                    onClick={() => setSelected('female')}
                >
                    <div className="icon-circle">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="gender-icon">
                            <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 15V23" stroke="currentColor" strokeWidth="2"/>
                            <path d="M9 19H15" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                    </div>
                    <span className="label">FEMALE</span>
                </button>

                <button 
                    className={`gender-btn ${selected === 'male' ? 'active' : ''}`}
                    onClick={() => setSelected('male')}
                >
                    <div className="icon-circle">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="gender-icon">
                             <path d="M10 20C14.4183 20 18 16.4183 18 12C18 7.58172 14.4183 4 10 4C5.58172 4 2 7.58172 2 12C2 16.4183 5.58172 20 10 20Z" stroke="currentColor" strokeWidth="2"/>
                             <path d="M22 2L16 8" stroke="currentColor" strokeWidth="2"/>
                             <path d="M22 2H17" stroke="currentColor" strokeWidth="2"/>
                             <path d="M22 2V7" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                    </div>
                    <span className="label">MALE</span>
                </button>
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
