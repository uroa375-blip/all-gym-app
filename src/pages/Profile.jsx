import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const navigate = useNavigate();

    const memberships = [
        { count: '1회', original: '70,000원', discount: '15%', price: '55,000원', event: false },
        { count: '5회', original: '180,000원', discount: '17%', price: '150,000원', event: true },
        { count: '10회', original: '340,000원', discount: '19%', price: '280,000원', event: false },
        { count: '20회', original: '700,000원', discount: '23%', price: '500,000원', event: false },
    ];

    return (
        <div className="profile-page-container">
            <div className="header-section">
                <div className="banner-img">
                    <img src="/img/pic1.png" alt="헬스장" />
                    <div className="heart-icon"><img src="/img/heart.png" alt="좋아요" /></div>
                </div>
                <div className="profile-circle">
                    <img src="/img/profile1.png" alt="트레이너 프로필" />
                </div>
            </div>

            <div className="basic-info">
                <h1 className="t-name">조정훈 선생님</h1>
                <p className="t-gym">트레이더 짐</p>
                <p className="t-loc">서울 관악구 난곡로 192-38</p>
            </div>

            <div className="intro-section">
                <div className="intro-bubble">
                    안녕하세요! 근력 강화, 체력 증진 전문<br />
                    조정훈 트레이너 입니다.<br /><br />
                    10년 경력의 지도 경력과 그 동안 쌓인 여러 회원님들의<br />
                    데이터와 개인적인 연구만으로도 짧은 기간 안에<br />
                    만족하실 결과를 만들어 드립니다!!<br /><br />
                    회원님들의 성원에 힘입어 올짐 3년속 1순위 트레이너로<br />
                    선정되어 영광스럽게 생각합니다.<br /><br />
                    안주하지 않고 계속 정진하는 트레이너가 될것을<br />
                    약속드리며 1:1 개인 상담을 통해 PT를 예약하시는<br />
                    분들께는 무료 인바디 분석 및 개인 맞춤 식단 플랜과<br />
                    단백질 드링크 1일 분을 제공해드립니다 ~^^
                </div>
            </div>

            <section className="section rating-section">
                <h2 className="section-title">평점</h2>
                <div className="rating-content">
                    <div className="chart-box">
                        <img src="/img/graph.png" alt="평점 차트" />
                    </div>
                    <div className="rating-info">
                        <div className="star-score">★ 4.8(65)</div>
                        <p className="rating-desc">친절하고 꼼꼼하게<br />지도를 잘해주셔서<br />처음하는 운동인데<br />너무 좋았어요</p>
                        <button className="btn-consult">1:1 상담</button>
                    </div>
                </div>
            </section>

            <section className="section qual-section">
                <h2 className="section-title">자격/입상</h2>
                <ul className="info-list">
                    <li>생활체육지도자 3급 (2010)</li>
                    <li>생활스포츠지도사 2급 보디빌딩</li>
                    <li>스포츠 마사지 1급</li>
                    <li>2022 Icn서울 보디빌딩 3위</li>
                    <li>2023 Npca 안양 보디빌딩 2위</li>
                    <li>2024 Whgp 구리 보디빌딩 3위</li>
                </ul>
            </section>

            <section className="section edu-section">
                <h2 className="section-title">학력/경력</h2>
                <ul className="info-list">
                    <li>중앙대학교 체육대학 졸업</li>
                    <li>전 스피드업 헬스클럽 트레이너</li>
                    <li>전 아이캔 휘트니스 트레이너</li>
                    <li>전 아마존 짐 트레이너</li>
                    <li>현 트레이더 짐 트레이너</li>
                </ul>
            </section>

            <div className="social-links">
                <div className="social-item">
                    <img src="/img/insta.png" alt="인스타그램" />
                    <span>인스타그램</span>
                </div>
                <div className="social-item">
                    <img src="/img/youtube.png" alt="유튜브" />
                    <span>youtube</span>
                </div>
            </div>

            <div className="membership-list">
                <h2 className="section-title">회원권</h2>
                {memberships.map((m, idx) => (
                    <div className="membership-item" key={idx}>
                        <div className="m-left">
                            <span className="m-count">{m.count}</span>
                            <span className="m-original">{m.original}</span>
                        </div>
                        <div className="m-right">
                            {m.event && <span className="badge-event">EVENT</span>}
                            <span className="m-discount">{m.discount}</span>
                            <span className="m-price">{m.price}</span>
                            <img 
                                src="/img/cart.png" 
                                alt="장바구니" 
                                className="cart-icon" 
                                onClick={() => navigate('/cart')} 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
