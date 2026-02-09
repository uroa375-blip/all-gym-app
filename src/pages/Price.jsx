import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Price.css';

const PriceCard = ({ data, isSelected, onSelect, onCartClick }) => {
    return (
        <div className={`price-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
            <div className="card-top">
                <span className="duration">{data.duration}</span>
                <img 
                    src="/assets/cart.png" 
                    className="cart-btn" 
                    alt="cart"
                    onClick={(e) => {
                        e.stopPropagation();
                        onCartClick();
                    }} 
                />
            </div>
            <div className="card-mid">
                <span className="original-price">{data.original}</span>
                <span className="discount-badge">{data.discount}</span>
            </div>
            <div className="card-bot">
                <span className="final-price">{data.final}</span>
            </div>
        </div>
    );
};

const GymEntry = ({ gym, onCartClick }) => {
    const [selectedId, setSelectedId] = useState(0);

    return (
        <div className="gym-entry">
            <div className="gym-header">
                <span className="gym-title">{gym.title}</span>
                <div className="gym-rating">
                    <img src="/assets/pinkstar.png" alt="star" />
                    <span>{gym.rating}({gym.reviews})</span>
                </div>
            </div>
            <div className="gym-photo">
                <img src={`/assets/${gym.img}`} alt={gym.title} />
            </div>
            <div className="update-date">{gym.updateDate} 업데이트</div>
            
            <div className="price-grid">
                {gym.prices.map((p, idx) => (
                    <PriceCard 
                        key={idx} 
                        data={p} 
                        isSelected={selectedId === idx}
                        onSelect={() => setSelectedId(idx)}
                        onCartClick={onCartClick}
                    />
                ))}
            </div>

            <div className="info-banner">
                <div className="info-label">무료 프로그램<br />무료 서비스</div>
                <div className="info-content">{gym.services}</div>
            </div>
        </div>
    );
};

const Price = () => {
    const navigate = useNavigate();

    const gyms = [
        {
            title: '케이안 휘트니스',
            rating: '4.7',
            reviews: 23,
            img: 'price1.png',
            updateDate: '2023.10.28',
            services: 'GX, 시니어서 전용, 맞춤 운동관리, 운동복, 샤워실, 주차장',
            prices: [
                { duration: '1개월', original: '100,000원', discount: '10%', final: '90,000원' },
                { duration: '3개월', original: '250,000원', discount: '15%', final: '212,500원' },
                { duration: '6개월', original: '400,000원', discount: '20%', final: '320,000원' },
                { duration: '12개월', original: '650,000원', discount: '25%', final: '487,500원' }
            ]
        },
        {
            title: '리드 짐',
            rating: '4.6',
            reviews: 42,
            img: 'price2.png',
            updateDate: '2023.10.28',
            services: 'GX, 시니어서 전용, 맞춤 운동관리, 운동복, 샤워실, 주차장',
            prices: [
                { duration: '1개월', original: '100,000원', discount: '10%', final: '90,000원' },
                { duration: '3개월', original: '250,000원', discount: '15%', final: '212,500원' },
                { duration: '6개월', original: '400,000원', discount: '20%', final: '320,000원' },
                { duration: '12개월', original: '650,000원', discount: '25%', final: '487,500원' }
            ]
        },
        {
            title: '트레이더 짐',
            rating: '4.6',
            reviews: 42,
            img: 'price3.png',
            updateDate: '2023.10.28',
            services: 'GX, 시니어서 전용, 맞춤 운동관리, 운동복, 샤워실, 주차장',
            prices: [
                { duration: '1개월', original: '100,000원', discount: '10%', final: '90,000원' },
                { duration: '3개월', original: '250,000원', discount: '15%', final: '212,500원' },
                { duration: '6개월', original: '400,000원', discount: '20%', final: '320,000원' },
                { duration: '12개월', original: '650,000원', discount: '25%', final: '487,500원' }
            ]
        },
        {
            title: '트레이더 짐',
            rating: '4.6',
            reviews: 42,
            img: 'price4.png',
            updateDate: '2023.10.28',
            services: 'GX, 시니어서 전용, 맞춤 운동관리, 운동복, 샤워실, 주차장',
            prices: [
                { duration: '1개월', original: '100,000원', discount: '10%', final: '90,000원' },
                { duration: '3개월', original: '250,000원', discount: '15%', final: '212,500원' },
                { duration: '6개월', original: '400,000원', discount: '20%', final: '320,000원' },
                { duration: '12개월', original: '650,000원', discount: '25%', final: '487,500원' }
            ]
        }
    ];

    return (
        <div className="price-page-container">
            {gyms.map((gym, idx) => (
                <GymEntry key={idx} gym={gym} onCartClick={() => navigate('/cart')} />
            ))}

            <div className="report-banner" onClick={() => navigate('/report')}>
                <img src="/assets/character.png" alt="character" className="char-img" />
                <div className="report-text">
                    <div className="report-main">정보가 달라요 !</div>
                    <div className="report-sub">현장과 다른 정보가 있나요? 제보해주세요!</div>
                </div>
            </div>
        </div>
    );
};

export default Price;
