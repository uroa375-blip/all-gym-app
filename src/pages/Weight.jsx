import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Weight.css';

const Weight = () => {
    const navigate = useNavigate();
    const scrollerRef = useRef(null);
    const [weight, setWeight] = useState(54);
    const pixelsPerKg = 20;
    const minWeight = 0;
    const maxWeight = 300;

    const ticks = Array.from({ length: maxWeight - minWeight + 1 }, (_, i) => i + minWeight);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeftState = useRef(0);

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

    const handleWheel = (e) => {
        if (scrollerRef.current) {
            // Treat vertical scroll as horizontal scroll for the ruler
            scrollerRef.current.scrollLeft += e.deltaY;
        }
    };

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollerRef.current.offsetLeft;
        scrollLeftState.current = scrollerRef.current.scrollLeft;
        scrollerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
        if (scrollerRef.current) scrollerRef.current.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        if (scrollerRef.current) scrollerRef.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Scroll-fast factor
        scrollerRef.current.scrollLeft = scrollLeftState.current - walk;
    };

    return (
        <div className="weight-container">
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
                    onWheel={handleWheel}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{ cursor: 'grab' }}
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
