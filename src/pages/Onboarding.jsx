import React from 'react';
import '../styles/Onboarding.css';
import allImg from '../assets/all.png';
import gymImg from '../assets/gym.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';

const Onboarding = () => {
    return (
        <div className="onboarding-body">
            <div className="onboarding-container">
                {/* 배경 이미지 */}
                <div className="background-image"></div>
                
                {/* 오버레이 */}
                <div className="overlay"></div>

                {/* 컨텐츠 */}
                <div className="content">
                    {/* 상단 텍스트 */}
                    <div className="top-text">
                        <h1>모든 <span className="highlight">운동시설을</span><br /><span className="indent-text">한 곳에 <span className="highlight">다 모았다</span></span></h1>
                    </div>

                    {/* ALL GYM 로고 */}
                    <div className="logo-section">
                        <div className="logo-wrapper">
                            <img src={allImg} alt="ALL" className="logo-all-img" />
                            <img src={gymImg} alt="GYM" className="logo-gym-img" />
                        </div>
                    </div>
                </div>

                {/* 하단 그라데이션 */}
                <div className="bottom-gradient"></div>
            </div>

            {/* 추가 섹션들 */}
            <div className="info-sections">
                {/* Section 1: 올짐 은? */}
                <section className="info-section section-1">
                    <div className="section-content">
                        <h2 className="section-title">올짐 은?</h2>
                        <p className="section-text">
                            전화나 방문없이 운동시설에<br />
                            방문하지 않아도 회원권 가격을<br />
                            쉽게 비교 할 수 있고 또 할인된<br />
                            가격에 신뢰하고 구입할 수 있는<br />
                            운동시설 플랫폼입니다.
                        </p>
                    </div>
                    <div className="section-image">
                        <img src={pic1} alt="헬스장 외관" />
                    </div>
                </section>

                {/* Section 2: 등록된 운동 시설 최다 보유 */}
                <section className="info-section section-2">
                    <div className="section-content">
                        <h2 className="section-title">등록된 운동 시설 최다 보유</h2>
                        <p className="section-text">
                            올짐은 국내 최초, 최다 운동 시설이<br />
                            등록된 운동 시설 플랫폼입니다.<br />
                            이젠 방문, 전화하지 마시고<br />
                            손쉽게 여러 시설들 중 마음에 드는<br />
                            곳을 찾아보세요.
                        </p>
                    </div>
                    <div className="section-image">
                        <img src={pic2} alt="헬스장 내부" />
                    </div>
                </section>

                {/* Section 3: 최대 할인율이 적용된 회원권 */}
                <section className="info-section section-3">
                    <div className="section-content">
                        <h2 className="section-title">최대 할인율이 적용된 회원권</h2>
                        <p className="section-text">
                            올짐에서 구매한 회원권은 일반<br />
                            회원권에 비해서 큰 할인이 적용됩니다.<br />
                            또한 통합회원권을 구매하시면 여러<br />
                            시설을 더 큰 폭의 할인된 가격으로<br />
                            이용하실 수 있습니다.
                        </p>
                    </div>
                    <div className="section-image">
                        <img src={pic3} alt="러닝머신" />
                    </div>
                </section>

                {/* Section 4: 회원권 유효성 보장 */}
                <section className="info-section section-4">
                    <div className="section-content">
                        <h2 className="section-title">회원권 유효성 보장</h2>
                        <p className="section-text">
                            계약과 다르게 운동시설이 갑자기<br />
                            폐업하거나 이용 제한을 할 경우,<br />
                            올짐을 통해서 사후 처리를 받으실 수<br />
                            있어서 안심하고 회원권을 구매하실 수<br />
                            있습니다.
                        </p>
                    </div>
                </section>

                {/* New Section: ALL GYM POINT */}
                <section className="point-section">
                    <h2 className="point-title">ALL GYM POINT</h2>
                    <p className="point-subtitle">
                        할인된 회원권을 올짐 포인트로<br />
                        더 저렴하게 구입해 보세요
                    </p>

                    <div className="point-circles">
                        <div className="circle-item top">친구 초대</div>
                        <div className="circle-row">
                            <div className="circle-item">출석 체크</div>
                            <div className="plus-sign">+</div>
                            <div className="circle-item">리뷰 쓰기</div>
                        </div>
                    </div>

                    <div className="arrow-down"></div>

                    <div className="point-footer">
                        <h3 className="footer-title">포인트로 회원권 구매</h3>
                        <div className="footer-desc">
                            * 올짐에서 친구 초대, 출석 체크, 리뷰 쓰기 등을 통해<br />
                            포인트를 적립하시면 할인된 회원권을 더 저렴하게<br />
                            구입하실 수 있습니다.
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Onboarding;
