import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { trendDataState } from "../../stores/atom";
import styled from "styled-components";

const PeriodBox = styled.div`
  width: 70%;
  height: 110px;
  border: 1px solid #4c4c4c;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;
const Input = styled.input`
  width: 65%;
  border: none;
  border-bottom: 1px solid #4c4c4c;
  margin-bottom: 20px;
`;
const DateInput = styled.input`
  width: 150px;
  height: 30px;
  margin-right: 50px;
`;
const CancleBT = styled.button`
  width: 10%;
  height: 40px;
  background: #848484;
  border: none;
  border-radius: 20px;
  margin-right: 20px;
  float: right;
`;
const RowBox = styled.div`
  display: flex;
`;
const CheckBT = styled.button`
  width: 10%;
  height: 40px;
  background: #d1ac58;
  border: none;
  border-radius: 20px;
  margin-right: 30%;
  float: right;
  cursor: pointer;
`;

function PeriodComponent() {
  const [trendData, setTrendData] = useRecoilState(trendDataState);
  const [keywords, setKeywords] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async () => {
    console.log("테스트: ", keywords, startDate, endDate);
    if (!keywords || !startDate || !endDate) {
      alert("모든 입력값을 입력해주세요.");
      return;
    }
    const today = new Date().toISOString().split("T")[0]; // 현재 날짜
    if (startDate > today || endDate > today) {
      alert("시작일과 종료일은 오늘 날짜보다 이후일 수 없습니다.");
      return;
    }

    if (startDate > endDate) {
      alert("시작일은 종료일보다 뒤에 있을 수 없습니다.");
      return;
    }
    setTrendData({ keywords, startDate, endDate });
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h4>데이터 수집 정보</h4>
      <PeriodBox>
        <RowBox>
          <h6>원하는 검색어 입력 : </h6>
          <Input
            placeholder="ex) 헬스,요가,등산 (단어를 ,로 구분하시오) 최대 5단어"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          ></Input>
        </RowBox>
        <RowBox>
          <h6 style={{ margin: 0, marginTop: "10px", marginRight: "15px" }}>
            시작 날짜 :
          </h6>
          <DateInput
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <h6 style={{ margin: 0, marginTop: "10px", marginRight: "15px" }}>
            종료 날짜 :{" "}
          </h6>
          <DateInput
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </RowBox>
      </PeriodBox>

      <CheckBT onClick={handleSubmit}>결과 보기</CheckBT>
      {/* <CancleBT>취소</CancleBT> */}
    </div>
  );
}

export default PeriodComponent;
