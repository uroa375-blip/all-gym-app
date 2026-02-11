import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Place.css';

const PlaceCard = ({ data, onCartClick, onImageClick }) => {
    const [reviewCount, setReviewCount] = useState(data.reviews || 0);

    const handleRatingClick = (e) => {
        e.stopPropagation();
        setReviewCount(prev => prev + 1);
    };

    return (
        <div className="card-item">
            <div className="card-image-wrap" onClick={onImageClick}>
                {data.rank && <div className="rank-badge">{data.rank}</div>}
                {data.new && <div className="tag new-badge">new</div>}
                <img src={`/assets/${data.img}`} alt={data.title} onError={(e) => e.target.src = '/assets/gym.png'} />
            </div>
            <div className="card-info">
                <div className="card-header">
                    <span className="card-title">{data.title}</span>
                    {data.rating && (
                        <div className="card-rating" onClick={handleRatingClick}>
                            <img src="/assets/pinkstar.png" alt="star" className="pinkstar-icon" />
                            <span>{data.rating}(<span className="review-count">{reviewCount}</span>)</span>
                        </div>
                    )}
                </div>
                <div className="card-footer" style={data.new ? { marginBottom: 0 } : {}}>
                    <span className="price-label">1개월</span>
                    <div className="price-value-wrap">
                        <span className="price-value">{data.price}</span>
                        <span className="price-unit">원</span>
                    </div>
                </div>
                {!data.new && (
                    <div className="card-actions">
                        {data.event ? <span className="tag event">EVENT</span> : <span />}
                        <div className="cart-icon" onClick={onCartClick}>
                            <img src="/assets/cart.png" alt="cart" className="cart-icon-img" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const Place = () => {
    const navigate = useNavigate();

    const nearbyData1 = [
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'near1.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'near3.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'pic1.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'pic2.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'pic3.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'gym.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'fitness.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'health.png', event: true }
    ];

    const nearbyData2 = [
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'thumb1.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'thumb2.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'thumb3.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'thumb4.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'thumb5.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'thumb6.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'thumb9.png', event: true },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'thumb10.png', event: true }
    ];

    const rankingData = [
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'rank1.png', event: true, rank: '1st' },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'rank2.png', event: true, rank: '2nd' },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'rank3.png', event: true, rank: '3rd' },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'rank4.png', event: true, rank: '4th' },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'rank5.png', event: true, rank: '5th' },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'rank6.png', event: true, rank: '6th' },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'rank7.png', event: true, rank: '7th' },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'rank8.png', event: true, rank: '8th' },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'rank9.png', event: true, rank: '9th' },
        { title: '리드짐', rating: '4.6', reviews: 42, price: '90,000', img: 'rank10.png', event: true, rank: '10th' }
    ];

    const newlyRegisteredData = Array(15).fill({
        title: '파이어짐',
        price: '90,000',
        img: 'rank1.png',
        new: true
    });

    const handleSaveRecommendation = () => {
        alert('추천이 저장되었습니다!');
    };

    return (
        <div className="place-page-container">
            <section className="section nearby">
                <h2 className="section-title">내 주변 가까운 곳</h2>
                <div className="scroll-container horizontal-scroll">
                    {nearbyData1.map((item, idx) => (
                        <PlaceCard 
                            key={idx} 
                            data={item} 
                            onCartClick={() => navigate('/cart')}
                            onImageClick={() => navigate('/pt')}
                        />
                    ))}
                </div>
                <div className="scroll-container horizontal-scroll" style={{ marginTop: '20px' }}>
                    {nearbyData2.map((item, idx) => (
                        <PlaceCard 
                            key={idx} 
                            data={item} 
                            onCartClick={() => navigate('/cart')}
                            onImageClick={() => navigate('/pt')}
                        />
                    ))}
                </div>
            </section>

            <section className="section ranking">
                <h2 className="section-title" style={{ paddingLeft: '20px' }}>랭킹 Top 10</h2>
                <div className="info-box">
                    <p>1주간 리뷰, 평점, 회원권 판매 순위를 통계하여 10위 안에 선정된 운동시설입니다.</p>
                    <p>순위는 매주 월요일 06:00시 기준으로 변동됩니다.</p>
                </div>
                <div className="grid-container">
                    {rankingData.map((item, idx) => (
                        <PlaceCard 
                            key={idx} 
                            data={item} 
                            onCartClick={() => navigate('/cart')}
                            onImageClick={() => navigate('/pt')}
                        />
                    ))}
                </div>
            </section>

            <section className="section newly-registered">
                <h2 className="section-title">신규 등록된 곳</h2>
                <div className="scroll-container horizontal-scroll">
                    {newlyRegisteredData.map((item, idx) => (
                        <PlaceCard 
                            key={idx} 
                            data={item} 
                            onCartClick={() => navigate('/cart')}
                            onImageClick={() => navigate('/pt')}
                        />
                    ))}
                </div>
            </section>

            <section className="recommend-section">
                <p className="recommend-title">등록 원하시는 장소가 있으시면 추천해주세요!</p>
                <div className="recommend-form">
                    <div className="form-group">
                        <label>업장명:</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>종목:</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>주소:</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>전화번호:</label>
                        <input type="text" />
                    </div>
                    <button className="save-btn" onClick={handleSaveRecommendation}>저장</button>
                </div>
            </section>
        </div>
    );
};

export default Place;
