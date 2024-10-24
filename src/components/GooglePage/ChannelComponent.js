// ChannelComponent.js
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { trendDataState } from "../../stores/atom";
import PieComponent from "../MainPage/PieComponent";
import nodataImg from "../../imgs/nodata.png";

const ColumnsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function ChannelComponent() {
  const trendData = useRecoilValue(trendDataState);
  const [channelsData, setChannelsData] = useState([]);
  useEffect(() => {
    // trendData가 바뀔 때마다 axios 요청을 보내는 부분
    const fetchTrendData = async () => {
      if (!trendData.keywords || !trendData.startDate || !trendData.endDate) {
        console.log("키워드, 시작일, 종료일이 모두 필요합니다.");
        return;
      }
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trends/${trendData.keywords}/${trendData.startDate}/${trendData.endDate}`
        );
        console.log("API Response: ", response.data);
        setChannelsData(response.data); // 받아온 데이터를 채널 데이터로 설정
      } catch (error) {
        console.error("Error fetching trends:", error);
      }
    };

    fetchTrendData();
  }, [trendData]);
  return (
    <div style={{ marginTop: "70px" }}>
      <h4>나라별 구글트랜드 지수</h4>
      <div style={{ display: "flex", flexWrap: "wrap", width: "80%" }}>
        {channelsData.length > 0 ? (
          <>
            {channelsData.map((channel) => (
              <div
                key={channel.channel}
                style={{
                  marginBottom: "80px",
                  height: "180px",
                  width: "50%",
                }}
              >
                <h5
                  style={{
                    borderBottom: "1px solid #d1ac58",
                    display: "inline-block",
                  }}
                >
                  {channel.country}
                </h5>
                <PieComponent data={channel.data} />{" "}
              </div>
            ))}
          </>
        ) : (
          <ColumnsBox>
            <img
              src={nodataImg}
              alt="No data available"
              style={{ width: "300px", height: "auto" }}
            />
            <h5>구글트랜드 지수를 알고 싶은 단어와 기간을 설정해주세요</h5>
          </ColumnsBox>
        )}
      </div>
    </div>
  );
}

export default ChannelComponent;
