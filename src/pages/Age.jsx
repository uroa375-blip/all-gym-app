import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Age.css';

const Age = () => {
    const navigate = useNavigate();
    const scrollerRef = useRef(null);
    const [selectedAge, setSelectedAge] = useState(28);
    const itemHeight = 50;

    const ages = Array.from({ length: 101 }, (_, i) => i);

    useEffect(() => {
        if (scrollerRef.current) {
            scrollerRef.current.scrollTop = selectedAge * itemHeight;
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleScroll = () => {
        if (!scrollerRef.current) return;
        const index = Math.round(scrollerRef.current.scrollTop / itemHeight);
        if (index >= 0 && index <= 100) {
            setSelectedAge(index);
        }
    };

    return (
        <div className="age-page-container">
            <div className="top-content">
                <h1 className="page-title">나이는요?</h1>
                <p className="page-desc">동일한 나이대의 회원님들께서 많이 계신 곳을<br />추천해 드립니다.</p>
            </div>

            <div className="picker-wrapper">
                <div className="highlight-bar"></div>
                <div 
                    className="number-scroller" 
                    ref={scrollerRef}
                    onScroll={handleScroll}
                >
                    {ages.map((age) => (
                        <div 
                            key={age} 
                            className={`number-item ${selectedAge === age ? 'active' : ''}`}
                        >
                            {age}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bottom-actions">
                <button className="btn btn-prev" onClick={() => navigate('/gender')}>이전</button>
                <button className="btn btn-next" onClick={() => navigate('/weight')}>다음</button>
            </div>
        </div>
    );
};

export default Age;
