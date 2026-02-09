import React, { useEffect, useRef } from 'react';
import './Map.css';

const Map = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (typeof window.naver === 'undefined' || !window.naver.maps) {
            console.error("Naver Maps API not loaded");
            return;
        }

        const locations = [
            { lat: 37.500095, lng: 127.026610, price: '40,000 원/월' },
            { lat: 37.497595, lng: 127.029610, price: '70,000 원/월' },
            { lat: 37.498595, lng: 127.028610, price: '66,000 원/월' },
            { lat: 37.498395, lng: 127.029010, price: '65,000 원/월' },
            { lat: 37.496595, lng: 127.025610, price: '55,000 원/월' },
            { lat: 37.495595, lng: 127.028010, price: '78,000 원/월' },
            { lat: 37.493095, lng: 127.029510, price: '60,000 원/월' }
        ];

        const mapOptions = {
            center: new window.naver.maps.LatLng(37.498095, 127.027610),
            zoom: 15,
            scaleControl: false,
            logoControl: false,
            mapDataControl: false,
            zoomControl: false 
        };

        const map = new window.naver.maps.Map(mapRef.current, mapOptions);

        locations.forEach((loc) => {
            const contentString = `
                <div class="custom-marker">
                   <div class="marker-price">${loc.price}</div>
                   <div class="marker-pin"></div>
                </div>
            `;

            new window.naver.maps.Marker({
                position: new window.naver.maps.LatLng(loc.lat, loc.lng),
                map: map,
                icon: {
                    content: contentString,
                    size: new window.naver.maps.Size(100, 80),
                    anchor: new window.naver.maps.Point(50, 80)
                }
            });
        });

    }, []);

    return (
        <div className="map-page-container">
            <div className="search-bar-wrap">
                <div className="search-bar">
                    <input type="text" placeholder="강남역" defaultValue="강남역" />
                    <button className="btn-search">🔍</button>
                </div>
            </div>
            <div id="map" ref={mapRef}></div>
        </div>
    );
};

export default Map;
