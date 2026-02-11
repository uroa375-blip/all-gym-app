import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Address.css";

const Address = () => {
  const navigate = useNavigate();

  const mapElRef = useRef(null);           // 지도가 붙을 DOM
  const mapInstanceRef = useRef(null);     // 지도 인스턴스(중복생성 방지)
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    let intervalId = null;

    const tryInit = () => {
      // 1) DOM 준비 전이면 대기
      if (!mapElRef.current) return;

      // 2) SDK 준비 전이면 대기
      const naver = window.naver;
      if (!naver || !naver.maps) return;

      // 3) 이미 만들었으면 중복 생성 방지
      if (mapInstanceRef.current) {
        setMapReady(true);
        return;
      }

      try {
        const mapOptions = {
          center: new naver.maps.LatLng(37.498095, 127.02761),
          zoom: 15,
          scaleControl: false,
          logoControl: false,
          mapDataControl: false,
          zoomControl: false,
          minZoom: 10,
        };

        mapInstanceRef.current = new naver.maps.Map(mapElRef.current, mapOptions);
        setMapReady(true);

        // 성공하면 폴링 종료
        if (intervalId) clearInterval(intervalId);
      } catch (e) {
        console.error("❌ Naver map init error:", e);
      }
    };

    // 즉시 1회 시도
    tryInit();

    // SDK가 늦게 로드될 수 있으니 폴링
    intervalId = setInterval(tryInit, 100);

    // 언마운트 시 정리
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="address-container">
      <div className="top-content">
        <h1 className="page-title">지역을 알려주세요</h1>
        <p className="page-desc">계시는 지역의 주변 운동시설을 추천해드립니다.</p>
      </div>

      {/* ✅ 지도 영역 (mapReady일 때 보이게) */}
      <div
        ref={mapElRef}
        className="map-wrapper"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "320px",      // ✅ 높이 없어서 안 보이는 경우 방지
          display: mapReady ? "block" : "none",
        }}
      />

      {/* ✅ 지도 실패/미로드 시 대체 이미지 */}
      {!mapReady && (
        <div className="map-placeholder">
          <img
            src="/assets/map2.png"
            alt="Map Placeholder"
            className="placeholder-img"
          />
        </div>
      )}

      <div className="bottom-actions">
        <button className="btn btn-prev" onClick={() => navigate("/height")}>
          이전
        </button>
        <button className="btn btn-next" onClick={() => navigate("/favorite")}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Address;