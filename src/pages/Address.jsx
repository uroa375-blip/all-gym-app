import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Address.css';

const Address = () => {
    const navigate = useNavigate();
    const mapRef = useRef(null);
    const placeholderRef = useRef(null);

    useEffect(() => {
        if (typeof window.naver !== 'undefined' && window.naver.maps) {
            const mapOptions = {
                center: new window.naver.maps.LatLng(37.498095, 127.027610),
                zoom: 15,
                scaleControl: false,
                logoControl: false,
                mapDataControl: false,
                zoomControl: false,
                minZoom: 10
            };

            new window.naver.maps.Map(mapRef.current, mapOptions);
            
            if (mapRef.current) mapRef.current.style.display = 'block';
            if (placeholderRef.current) placeholderRef.current.style.display = 'none';
        } else {
            if (mapRef.current) mapRef.current.style.display = 'none';
            if (placeholderRef.current) placeholderRef.current.style.display = 'block';
        }
    }, []);

    return (
        <div className="address-page-container">
            <div className="top-content">
                <h1 className="page-title">지역을 알려주세요</h1>
                <p className="page-desc">계시는 지역의 주변 운동시설을 추천해드립니다.</p>
            </div>

            <div id="map" ref={mapRef} className="map-wrapper"></div>
            
            <div ref={placeholderRef} className="map-placeholder" style={{ display: 'none' }}>
                <img src="/img/map2.png" alt="Map Placeholder" className="placeholder-img" />
            </div>

            <div className="bottom-actions">
                <button className="btn btn-prev" onClick={() => navigate('/height')}>이전</button>
                <button className="btn btn-next" onClick={() => navigate('/confirm')}>다음</button>
            </div>
        </div>
    );
};

export default Address;
