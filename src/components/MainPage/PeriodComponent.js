import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { instaDataState } from "../../stores/atom";
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
  const [instaData, setInstaData] = useRecoilState(instaDataState);
  const [keywords, setKeywords] = useState("");

  const handleSubmit = async () => {
    console.log("테스트: ", keywords);
    if (!keywords) {
      alert("단어를 입력값을 입력해주세요.");
      return;
    }
    setInstaData({ keywords });
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h4>데이터 수집 정보</h4>
      <PeriodBox>
        <RowBox>
          <h6>원하는 검색어 입력 : </h6>
          <Input
            placeholder="단어입력"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          ></Input>
        </RowBox>
      </PeriodBox>

      <CheckBT onClick={handleSubmit}>결과 보기</CheckBT>
      {/* <CancleBT>취소</CancleBT> */}
    </div>
  );
}

export default PeriodComponent;
