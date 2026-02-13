import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Favorite.css';

const FavoriteItem = ({ img, label, className }) => {
    const [selected, setSelected] = useState(false);
    
    // Logic to handle image switching: 
    // If not selected, append '-2' before the extension.
    // e.g., 'ballet.png' -> 'ballet-2.png'
    const displayImg = selected ? img : img.replace(/\.png$/, '-2.png');

    return (
        <div 
            className={`scattered-item ${className} ${selected ? 'selected' : ''}`} 
            onClick={() => setSelected(!selected)}
        >
            <div className="icon-box">
                <img src={`/assets/${displayImg}`} alt={label} className="icon-img" />
            </div>
            <span className="item-label">{label}</span>
        </div>
    );
};

const Favorite = () => {
    const navigate = useNavigate();

    const items = [
        { img: 'crossfit.png', label: '크로스핏 · 스피닝', className: 'pos-0' },
        { img: 'pilates.png', label: '필라테스 · 요가', className: 'pos-1' },
        { img: 'ballet.png', label: '발레 · 댄스', className: 'pos-2' },
        { img: 'fitness.png', label: '헬스', className: 'pos-3' },
        { img: 'boxing.png', label: '킥복싱 · 격투기', className: 'pos-4' },
        { img: 'taegwondo.png', label: '주짓수 · 태권도', className: 'pos-5' },
    ];

    return (
        <div className="favorite-container">
            <div className="top-content">
                <h1 className="page-title">관심있는 운동이 있나요?</h1>
                <p className="page-desc">운동시설과 P.T선생님을 추천해 드립니다.</p>
            </div>

            <div className="scattered-container">
                {items.map((item, idx) => (
                    <FavoriteItem key={idx} {...item} />
                ))}
            </div>

            <div className="bottom-actions">
                <button className="btn btn-prev" onClick={() => navigate('/address')}>이전</button>
                <button className="btn btn-next" onClick={() => navigate('/confirm')}>다음</button>
            </div>
        </div>
    );
};

export default Favorite;
