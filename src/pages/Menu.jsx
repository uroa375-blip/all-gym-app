import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = () => {
    const navigate = useNavigate();

    return (
        <div className="menu-page-container">
            <div className="menu-list">
                <button className="menu-btn" onClick={() => navigate('/place')}>내 주변 운동 시설</button>
                <button className="menu-btn" onClick={() => navigate('/map')}>지도에서 찾기</button>
                <button className="menu-btn" onClick={() => navigate('/pt')}>P.T 가격 비교</button>
                <button className="menu-btn" onClick={() => navigate('/membership')}>통합회원권</button>
            </div>
        </div>
    );
};

export default Menu;
