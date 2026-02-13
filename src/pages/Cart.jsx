import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

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
                    <img src="/assets/payment.png" alt="헬스장 이미지" className="gym-image" />
                </div>

                <div className="price-card">
                    <div className="price-top">
                        <div className="m-info">
                            <span className="duration">3개월</span>
                            <span className="original-price">250,000원</span>
                            <span className="discount-rate">15%</span>
                        </div>
                        <div className="m-price-group">
                            <span className="price-label">올짐 회원가</span>
                            <span className="final-price">212,500원</span>
                        </div>
                        <button className="delete-btn" onClick={handleDelete} aria-label="삭제">
                            <img src="/assets/Waste.png" alt="삭제" className="delete-icon" />
                        </button>
                    </div>

                    <div className="price-divider"></div>

                    <div className="quantity-section">
                        <span className="quantity-label">갯수</span>
                        <div className="quantity-input-group">
                            <div className="quantity-number-box">{quantity}</div>
                            <div className="quantity-arrows">
                                <button className="q-arrow q-up" onClick={handleIncrease}>▲</button>
                                <button className="q-arrow q-down" onClick={handleDecrease}>▼</button>
                            </div>
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
