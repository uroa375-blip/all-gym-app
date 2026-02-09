import React, { useState } from 'react';
import '../styles/Thumbnail.css';

const Thumbnail = () => {
    const [activeFilter, setActiveFilter] = useState('헬스');

    const thumbs = [
        'thumb1.png', 'thumb2.png', 'thumb3.png', 'thumb4.png', 'thumb5.png',
        'thumb6.png', 'thumb9.png', 'thumb10.png', 'thumb11.png', 'thumb12.png',
        'thumb13.png', 'thumb14.png', 'thumb15.png', 'thumb17.png', 'thumb1.png'
    ];

    const filters = [
        '헬스', '크로스핏', '스피닝', '필라테스', '요가', '댄스',
        '발레', '킥복싱', '격투기', '주짓수', '태권도', '기타'
    ];

    return (
        <div className="thumbnail-page-container">
            <div className="header">
                <img src="/assets/plus.png" alt="그리드" className="grid-icon" /> // Placeholder for grid-icon
                <img src="/assets/list.png" alt="메뉴" className="menu-icon" /> // Placeholder for menu-icon
            </div>

            <div className="gallery-grid">
                {thumbs.map((thumb, idx) => (
                    <div className="gallery-item" key={idx}>
                        <img src={`/assets/${thumb}`} alt="헬스장" />
                    </div>
                ))}
            </div>

            <div className="filter-section">
                <div className="filter-buttons">
                    {filters.map((f) => (
                        <button 
                            key={f}
                            className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Thumbnail;
