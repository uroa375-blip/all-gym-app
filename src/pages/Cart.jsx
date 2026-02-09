import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const unitPrice = 212500;
    const [activeTab, setActiveTab] = useState('normal');

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        if (quantity < 10) setQuantity(quantity + 1);
    };

    const handleDelete = () => {
        if (window.confirm('장바구니에서 삭제하시겠습니까?')) {
            alert('삭제되었습니다.');
        }
    };

    return (
        <div className="cart-page-container">
            <div className="header-tabs">
                <button 
                    className={`tab ${activeTab === 'normal' ? 'active' : ''}`}
                    onClick={() => setActiveTab('normal')}
                >
                    일반회원권
                </button>
                <button 
                    className={`tab ${activeTab === 'integrated' ? 'active' : ''}`}
                    onClick={() => setActiveTab('integrated')}
                >
                    통합회원권
                </button>
            </div>

            <div className="content-section">
                <div className="gym-info">
                    <h1 className="gym-title">서초 리드 짐</h1>
                    <p className="gym-location">서울 관악구 봉천동 1129km</p>
                </div>

                <div className="gym-image-container">
                    <img src="/img/membership1.png" alt="헬스장 이미지" className="gym-image" />
                </div>

                <div className="price-card">
                    <div className="price-header">
                        <span className="membership-badge">출석 실패시</span>
                        <button className="delete-btn" onClick={handleDelete} aria-label="삭제">
                            <svg className="delete-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </button>
                    </div>

                    <div className="price-info">
                        <span className="duration">3개월</span>
                        <span className="original-price">250,000원</span>
                        <span className="discount-rate">15%</span>
                        <span className="final-price">212,500원</span>
                    </div>

                    <div className="quantity-control">
                        <span className="quantity-label">갯수</span>
                        <div className="quantity-buttons">
                            <button className="quantity-btn" onClick={handleDecrease}>▼</button>
                            <span className="quantity-value">{quantity}</span>
                            <button className="quantity-btn" onClick={handleIncrease}>▲</button>
                        </div>
                    </div>
                </div>

                <div className="total-section">
                    <div className="total-row">
                        <span className="total-label">총 상품금액</span>
                        <span className="total-price">
                            {(unitPrice * quantity).toLocaleString('ko-KR')}원
                        </span>
                    </div>
                </div>

                <div className="promotion-text">
                    <p>
                        <span className="promotion-highlight">
                            일반회원권 할인으로 총 { (37500 * quantity).toLocaleString('ko-KR') }원을 할인 받으셨네요!
                        </span><br />
                        복합 운동시설은 통합회원권으로 구매하시면<br />
                        더 큰 할인 적용이 가능합니다!!!
                    </p>
                </div>

                <button className="purchase-btn" onClick={() => navigate('/membership')}>
                    통합회원권 이용 방법
                </button>
            </div>
        </div>
    );
};

export default Cart;
