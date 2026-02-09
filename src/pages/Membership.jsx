import React from 'react';
import './Membership.css';

const Membership = () => {
    const faqs = [
        {
            q: '시설마다 이용 기간이 달라도 되나요?',
            a: '가능합니다! 운동시설 별로 원하는 기간을 선택하여 자유롭게 나만의 회원권을 만들어 보세요. 단, 기간이 달라도 운동시작일은 동일하게 적용됩니다.'
        },
        {
            q: '운동시설을 따로 결제하면 안되나요?',
            a: '통합회원권 할인은 시설 2-3곳을 한번에 결제해야 자동으로 할인이 적용됩니다.'
        },
        {
            q: '운동시설 출석 방법이 궁금해요.',
            a: "통합회원권 구매 시, 올짐앱 홈 화면과 마이올짐 페이지에서 'QR 출석하기' 버튼이 생성됩니다. 올짐앱에서 'QR 출석하기' 버튼을 누른 후, 운동시설에 비치된 QR코드를 찍으면 출석이 완료됩니다. (운동시설에 따라 얼굴인식 출입, 출석프로그램 입력 등 출석 방식이 다를 수 있으니, 시설에서 안내하는 방식으로 출석해 주세요.)"
        },
        {
            q: '출석 포인트 적립 방식이 궁금해요.',
            a: '올짐앱에서 출석 즉시 포인트가 자동으로 지급됩니다.'
        }
    ];

    return (
        <div className="membership-page-container">
            <section className="hero-section">
                <p className="hero-subtitle">여러 가지 운동을 하나의 회원권으로<br />최대 할인을 받고 즐길 수 있는 방법</p>
                <h1 className="hero-title">올짐 통합회원권</h1>
                <div className="collage-container">
                    <img src="/img/membership1.png" alt="헬스장" className="collage-img img-top-left" />
                    <img src="/img/membership2.png" alt="헬스장" className="collage-img img-tall" />
                    <img src="/img/membership3.png" alt="헬스장" className="collage-img img-bot-left" />
                    <img src="/img/membership4.png" alt="헬스장" className="collage-img img-big" />
                    <img src="/img/membership5.png" alt="헬스장" className="collage-img img-bot-right" />
                </div>
            </section>

            <section className="info-section">
                <h2 className="section-heading">통합회원권이란?</h2>
                <p className="section-desc">원하는 시설을 최대 4곳까지 최대 80%<br />할인가로 함께 이용할 수 있는 회원권입니다.</p>
                <div className="info-card-list">
                    <div className="info-card">
                        <div className="info-item">
                            <img src="/img/home.png" alt="집" />
                            <span>집 근처</span>
                        </div>
                        <div className="plus-circle">+</div>
                        <div className="info-item">
                            <img src="/img/company.png" alt="회사" />
                            <span>회사 근처</span>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-item">
                            <img src="/img/health.png" alt="헬스" />
                            <span>헬스</span>
                        </div>
                        <div className="plus-circle">+</div>
                        <div className="info-item">
                            <img src="/img/pilates.png" alt="필라테스" />
                            <span>필라테스</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="faq-badge">통합회원권 FAQ</div>
                <div className="faq-list">
                    {faqs.map((faq, idx) => (
                        <div className="faq-item" key={idx}>
                            <div className="faq-question">
                                <span className="q-icon">Q</span>
                                <span className="q-text">{faq.q}</span>
                            </div>
                            <div className="faq-answer">{faq.a}</div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="footer-cta-area">
                <p className="cta-text">여러 곳 등록하고 싶지만 가격이 고민될때,<br />올짐 통합회원권으로 저렴하게 이용하세요.</p>
                <button className="cta-btn">통합회원권 만들기</button>
            </div>
        </div>
    );
};

export default Membership;
