import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PT.css';

const PT = () => {
    const navigate = useNavigate();
    const [trainers] = useState([
        { name: '조정현 선생님', gym: '트레이더 짐', loc: '서울 관악구 난곡로 192-38', rating: 4.8, review: 65, img: 'trainer1.png' },
        { name: '배민정 선생님', gym: '올텐짐 휘트니스', loc: '서울 관악구 난곡로 192-38', rating: 4.8, review: 42, img: 'trainer2.png' },
        { name: '이성현 선생님', gym: '케이안 휘트니스', loc: '서울 관악구 난곡로 192-38', rating: 4.7, review: 55, img: 'trainer3.png' },
        { name: '조기현 선생님', gym: '오늘도 운동해', loc: '서울 관악구 난곡로 192-38', rating: 4.6, review: 38, img: 'trainer4.png' },
        { name: '김주아 선생님', gym: '케이안 휘트니스', loc: '서울 관악구 난곡로 192-38', rating: 4.6, review: 35, img: 'trainer5.png' },
        { name: '이윤지 선생님', gym: '원핑짐 휘트니스', loc: '서울 관악구 난곡로 192-38', rating: 4.6, review: 28, img: 'trainer6.png' },
        { name: '한유혜 선생님', gym: '데일리 우먼스', loc: '서울 관악구 난곡로 192-38', rating: 4.5, review: 40, img: 'trainer7.png' },
        { name: '안정민 선생님', gym: '프렌즈 헬스', loc: '서울 관악구 난곡로 192-38', rating: 4.5, review: 32, img: 'trainer8.png' },
        { name: '조정현 선생님', gym: '트레이더 짐', loc: '서울 관악구 난곡로 192-38', rating: 4.8, review: 65, img: 'trainer1.png' },
        { name: '배민정 선생님', gym: '올텐짐 휘트니스', loc: '서울 관악구 난곡로 192-38', rating: 4.8, review: 42, img: 'trainer2.png' },
        { name: '이성현 선생님', gym: '케이안 휘트니스', loc: '서울 관악구 난곡로 192-38', rating: 4.7, review: 55, img: 'trainer3.png' },
        { name: '조기현 선생님', gym: '오늘도 운동해', loc: '서울 관악구 난곡로 192-38', rating: 4.6, review: 38, img: 'trainer4.png' },
        { name: '김주아 선생님', gym: '케이안 휘트니스', loc: '서울 관악구 난곡로 192-38', rating: 4.6, review: 35, img: 'trainer5.png' },
        { name: '이윤지 선생님', gym: '원핑짐 휘트니스', loc: '서울 관악구 난곡로 192-38', rating: 4.6, review: 28, img: 'trainer6.png' },
        { name: '한유혜 선생님', gym: '데일리 우먼스', loc: '서울 관악구 난곡로 192-38', rating: 4.5, review: 40, img: 'trainer7.png' },
        { name: '안정민 선생님', gym: '프렌즈 헬스', loc: '서울 관악구 난곡로 192-38', rating: 4.5, review: 32, img: 'trainer8.png' }
    ]);

    return (
        <div className="pt-page-container">
            <header className="page-header">
                <h1 className="page-title">P.T 가격 비교</h1>
            </header>

            <div className="top-tabs">
                <div className="tab-item active">전문분야</div>
                <div className="tab-item">가격</div>
                <div className="tab-item">지역</div>
            </div>

            <div className="filter-section">
                <div className="filter-grid">
                    <label className="checkbox-item">
                        <input type="checkbox" defaultChecked />
                        <span className="checkmark"></span>
                        <span className="label-text">근력강화</span>
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label-text">다이어트</span>
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label-text">스트레칭</span>
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label-text">유연성향상</span>
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label-text">재활치료</span>
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" defaultChecked />
                        <span className="checkmark"></span>
                        <span className="label-text">체형교정</span>
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label-text">그룹운동</span>
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label-text">댄스·스포츠</span>
                    </label>
                </div>
                <div className="filter-divider"></div>
            </div>

            <div className="sort-tabs">
                <span className="sort-item active">평점높은순</span>
                <span className="sort-item">리뷰순</span>
            </div>

            <div className="trainer-list">
                {trainers.map((t, idx) => (
                    <div className="trainer-item" key={idx}>
                        <div className="trainer-img-box">
                            <img src={`/assets/${t.img}`} alt={t.name} className="trainer-img" />
                        </div>
                        <div className="trainer-info">
                            <div className="info-top">
                                <div className="name-gym">
                                    <h3 className="t-name">{t.name}</h3>
                                    <p className="t-gym">{t.gym}</p>
                                    <p className="t-loc">{t.loc}</p>
                                </div>
                                <div className="t-rating">
                                    <img src="/assets/pinkstar.png" alt="star" className="star-icon" />
                                    {t.rating}({t.review})
                                </div>
                            </div>
                            <div className="info-bottom">
                                <button className="btn-detail" onClick={() => navigate('/profile')}>자세히</button>
                                <button className="btn-consult">1:1 상담</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PT;
