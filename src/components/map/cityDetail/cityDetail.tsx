import React from "react";
import "./cityDetail.css";
import { useNavigate } from "react-router-dom";

const CityDetail = () => {
  const navigate = useNavigate();
  return (
    <section className="content">
      <div className="closeBtn">X</div>
      <div className="content-header">
        <div className="nationalFlagImg-container">
          <img
            className="nationalFlagImg"
            src="data:image/png;base64,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"
            alt="national flag image"
          />
        </div>
        <h2>나고야</h2>
        <h4>(일본)</h4>
      </div>
      <ul className="outline-container">
        <li>여행기간: 1시간 30분</li>
        <li>먼저 여행한 방문자: 00명</li>
        <li>현재 여행 중: 00명</li>
      </ul>
      <p className="description">
        메이지 유신의 현대화 노력의 일환으로 일본의 막번체제는 도도부현 체제로 변화하게 되었다.
        나고야 시는 1889년 4월 1일에 성립하였고 1956년 9월 1일에 정령지정도시가 되었다.
      </p>
      <div className="travelBtn-container">
        <button
          className="travelBtn"
          onClick={(event) => {
            navigate(`/trip/japan`);
          }}
        >
          지금 여행가기
        </button>
      </div>
    </section>
  );
};

export default CityDetail;
