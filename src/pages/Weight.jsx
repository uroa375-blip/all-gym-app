import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Weight.css';

const Weight = () => {
    const navigate = useNavigate();
    const scrollerRef = useRef(null);
    const [weight, setWeight] = useState(54);
    const pixelsPerKg = 20;
    const minWeight = 0;
    const maxWeight = 300;

    const ticks = Array.from({ length: maxWeight - minWeight + 1 }, (_, i) => i + minWeight);

    useEffect(() => {
        if (scrollerRef.current) {
            scrollerRef.current.scrollLeft = (weight - minWeight) * pixelsPerKg;
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleScroll = () => {
        if (!scrollerRef.current) return;
        const val = minWeight + scrollerRef.current.scrollLeft / pixelsPerKg;
        setWeight(Math.round(val));
    };

    return (
        <div className="weight-page-container">
            <div className="top-content">
                <h1 className="page-title">몸무게를 알려주세요</h1>
                <p className="page-desc">P.T 상담시 입력하지 않으셔도 자동으로 정보를<br />제공해 드립니다.</p>
            </div>

            <div className="weight-display">
                <span className="weight-value">{weight}</span>
                <span className="weight-unit">kg</span>
            </div>

            <div className="ruler-wrapper">
                <div className="center-line"></div>
                <div 
                    className="ruler-scroller" 
                    ref={scrollerRef}
                    onScroll={handleScroll}
                >
                    {ticks.map((t) => (
                        <div className="tick-wrapper" key={t} style={{ width: `${pixelsPerKg}px` }}>
                            <div className={`tick ${t % 5 === 0 ? 'long' : 'short'}`}></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bottom-actions">
                <button className="btn btn-prev" onClick={() => navigate('/age')}>이전</button>
                <button className="btn btn-next" onClick={() => navigate('/height')}>다음</button>
            </div>
        </div>
    );
};

export default Weight;
