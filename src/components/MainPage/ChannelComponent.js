// ChannelComponent.js
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { instaDataState } from "../../stores/atom";
import PieComponent from "./PieComponent";

const channelsData = [
  {
    channel: "tictok",
    data: [
      { id: "ava", value: 60, color: "hsl(159, 70%, 50%)" },
      { id: "opic", value: 80, color: "hsl(159, 70%, 50%)" },
      { id: "spike", value: 80, color: "hsl(159, 70%, 50%)" },
    ],
  },
  {
    channel: "amazon",
    data: [
      { id: "monkey", value: 90, color: "hsl(44, 70%, 50%)" },
      { id: "AMZN", value: 100, color: "hsl(44, 70%, 50%)" },
      { id: "EC2", value: 100, color: "hsl(44, 70%, 50%)" },
    ],
  },
  {
    channel: "wallmart",
    data: [
      { id: "이건", value: 50, color: "hsl(282, 70%, 50%)" },
      { id: "뭔", value: 60, color: "hsl(282, 70%, 50%)" },
      { id: "사이트고", value: 40, color: "hsl(282, 70%, 50%)" },
      { id: "신기", value: 40, color: "hsl(282, 70%, 50%)" },
      { id: "방기", value: 40, color: "hsl(282, 70%, 50%)" },
    ],
  },
];

function ChannelComponent() {
  const instaData = useRecoilValue(instaDataState);
  const [instaStaticData, setInstaStaticData] = useState(null);
  useEffect(() => {
    const fetchInstaData = async () => {
      if (!instaData.keywords) {
        console.log("키워드를 입력해주세요");
        return;
      }
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/insta/hashtags/${instaData.keywords}`
        );
        console.log("API Response: ", response.data);
        setInstaStaticData(response.data); // 받아온 데이터를 채널 데이터로 설정
      } catch (error) {
        console.error("Error fetching trends:", error);
      }
    };

    fetchInstaData();
  }, [instaData]);
  return (
    <div style={{ marginTop: "50px" }}>
      <h4>채널별 수집 현황</h4>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* insta api */}
        {instaStaticData ? (
          <>
            <div
              key={instaStaticData.channel}
              style={{ marginBottom: "80px", height: "160px", width: "50%" }}
            >
              <h5>{instaStaticData.channel}</h5>
              <PieComponent data={instaStaticData.data} />{" "}
            </div>
          </>
        ) : (
          <></>
        )}

        {channelsData.map((channel) => (
          <div
            key={channel.channel}
            style={{ marginBottom: "80px", height: "160px", width: "50%" }}
          >
            <h5>{channel.channel}</h5>
            <PieComponent data={channel.data} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChannelComponent;
