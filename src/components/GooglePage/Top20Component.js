import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import KeywordComponent from "./KeywordComponent";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const TopBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70%;
  background-color: #edc463;
  margin-right: 20%;
`;
const ColumnsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const RowBox = styled.div`
  display: flex;
  justify-content: center;
`;
const CountryBT = styled.button`
  width: 60px;
  height: 20px;
  background-color: #d1ac58;
  border: none;
  font-size: 12px;
  margin-right: 3px;
  cursor: pointer;
  &:hover,
  &:active {
    color: inherit;
    font-weight: bold;
    background-color: #856d34;
  }
  font-weight: ${(props) => (props.clicked ? "bold" : "normal")};
  background-color: ${(props) => (props.clicked ? "#856d34" : "#d1ac58")};
`;

function Top20Component() {
  const [clickedBT, setClickedBT] = useState("");
  const [keywords, setKeywords] = useState([]);
  const fetchTop20 = async (country) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/trends/top20/${country}`
      );
      const data = response.data;
      setClickedBT(country);
      // 받은 데이터를 keywords 상태에 저장
      setKeywords(data);
    } catch (error) {
      console.error("데이터를 가져오는 데 오류가 발생했습니다:", error);
    }
  };
  return (
    <Div>
      <TopBox>
        <ColumnsBox>
          <h4>급상승 검색어 TOP20</h4>
          <RowBox>
            <CountryBT
              onClick={() => fetchTop20("south_korea")}
              clicked={clickedBT === "south_korea"}
            >
              Korea
            </CountryBT>
            <CountryBT
              onClick={() => fetchTop20("united_states")}
              clicked={clickedBT === "united_states"}
            >
              US
            </CountryBT>
            <CountryBT
              onClick={() => fetchTop20("canada")}
              clicked={clickedBT === "canada"}
            >
              Canada
            </CountryBT>
          </RowBox>
          <ColumnsBox>
            {keywords.length > 0 ? (
              <ColumnsBox>
                <KeywordComponent keywords={keywords} />
              </ColumnsBox>
            ) : (
              <h6>나라를 눌러 인기 검색어를 확인해보세요!</h6>
            )}
          </ColumnsBox>
        </ColumnsBox>
      </TopBox>
    </Div>
  );
}

export default Top20Component;
