import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Confirm.css';

const Confirm = () => {
    const navigate = useNavigate();

    return (
        <div className="confirm-container">
            <div className="top-content">
                <h1 className="page-title">좋아요!</h1>
                <p className="page-desc">이제 올짐에서<br />마음에 드는 운동시설을<br />찾으러 가봐요.</p>
            </div>

            <div className="animation-content">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>

            <div className="bottom-actions">
                <button className="btn btn-prev" onClick={() => navigate('/favorite')}>이전</button>
                <button className="btn btn-next" onClick={() => navigate('/menu')}>GO</button>
            </div>
        </div>
    );
};

export default Confirm;
