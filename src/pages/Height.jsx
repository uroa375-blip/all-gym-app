import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Height.css';

const Height = () => {
    const navigate = useNavigate();
    const scrollerRef = useRef(null);
    const [height, setHeight] = useState(172);
    const pixelsPerCm = 20;
    const minHeight = 0;
    const maxHeight = 300;

    const ticks = Array.from({ length: maxHeight - minHeight + 1 }, (_, i) => i + minHeight);

    useEffect(() => {
        if (scrollerRef.current) {
            scrollerRef.current.scrollTop = (height - minHeight) * pixelsPerCm;
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleScroll = () => {
        if (!scrollerRef.current) return;
        const val = minHeight + scrollerRef.current.scrollTop / pixelsPerCm;
        setHeight(Math.round(val));
    };

    return (
        <div className="height-page-container">
            <div className="left-content">
                <h1 className="page-title">키는요?</h1>
                <p className="page-desc">P.T 상담시 입력하지 않으셔도 자동으로 정보를<br />제공해 드립니다.</p>
            </div>

            <div className="main-display">
                <div className="ruler-wrapper">
                    <div className="center-line"></div>
                    <div 
                        className="ruler-scroller" 
                        ref={scrollerRef}
                        onScroll={handleScroll}
                    >
                        {ticks.map((t) => (
                            <div className="tick-wrapper" key={t} style={{ height: `${pixelsPerCm}px` }}>
                                <div className={`tick ${t % 5 === 0 ? 'long' : 'short'}`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="height-text">
                    <span className="height-value">{height}</span>
                    <span className="height-unit">cm</span>
                </div>
            </div>

            <div className="bottom-actions">
                <button className="btn btn-prev" onClick={() => navigate('/weight')}>이전</button>
                <button className="btn btn-next" onClick={() => navigate('/address')}>다음</button>
            </div>
        </div>
    );
};

export default Height;
