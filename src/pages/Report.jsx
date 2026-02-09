import React, { useState } from 'react';
import '../styles/Report.css';

const Report = () => {
    const [activeTab, setActiveTab] = useState('normal');
    const [detail, setDetail] = useState('');
    const [checkedItems, setCheckedItems] = useState({
        info1: true,
        info3: true
    });

    const handleCheckChange = (id) => {
        setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleSubmit = () => {
        const hasChecked = Object.values(checkedItems).some(val => val);
        if (!hasChecked) {
            alert('최소 하나의 항목을 선택해주세요.');
            return;
        }
        alert('제보해주셔서 감사합니다!');
    };

    return (
        <div className="report-page-container">
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
                    <p className="gym-location">서울 강남구 서초동 1129km</p>
                </div>

                <div className="question-section">
                    <h2 className="question-title">어떤 정보가 다른가요?</h2>
                    <p className="question-subtitle">제보해 주신 정보는 다른 사용자들에게 도움이 되요!</p>
                </div>

                <div className="checkbox-list">
                    {[
                        { id: 'info1', label: '현장가격이 더 저렴해요' },
                        { id: 'info2', label: '운영시간이 달라요' },
                        { id: 'info3', label: '부가서비스 정보가 달라요' },
                        { id: 'info4', label: '운영 프로그램 정보가 달라요' },
                        { id: 'info5', label: '시설 이용에 제한이 있어요' },
                        { id: 'info6', label: '기타' }
                    ].map((item) => (
                        <div className="checkbox-item" key={item.id}>
                            <input 
                                type="checkbox" 
                                id={item.id} 
                                checked={!!checkedItems[item.id]} 
                                onChange={() => handleCheckChange(item.id)}
                            />
                            <label htmlFor={item.id}>{item.label}</label>
                        </div>
                    ))}
                </div>

                <div className="text-input-section">
                    <div className="char-counter">
                        자세히 알려주실 수 있나요?(선택) {detail.length}/1000
                    </div>
                    <textarea 
                        className="text-input" 
                        placeholder="예시)할인 달력 운동복 대여 비용을 추가로 받고 있어요."
                        maxLength={1000}
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                    ></textarea>
                </div>

                <button className="submit-btn" onClick={handleSubmit}>제보하기</button>
            </div>
        </div>
    );
};

export default Report;
