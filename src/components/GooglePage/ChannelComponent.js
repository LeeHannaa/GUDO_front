// ChannelComponent.js
import PieComponent from "../MainPage/PieComponent";

const channelsData = [
  {
    channel: "korea",
    data: [
      { id: "infinite", value: 50, color: "hsl(357, 70%, 50%)" },
      { id: "exo", value: 70, color: "hsl(357, 70%, 50%)" },
      { id: "nike", value: 30, color: "hsl(357, 70%, 50%)" },
      { id: "kakao", value: 40, color: "hsl(357, 70%, 50%)" },
    ],
  },
  {
    channel: "us",
    data: [
      { id: "ava", value: 60, color: "hsl(159, 70%, 50%)" },
      { id: "opic", value: 80, color: "hsl(159, 70%, 50%)" },
      { id: "spike", value: 80, color: "hsl(159, 70%, 50%)" },
    ],
  },
  {
    channel: "canada",
    data: [
      { id: "monkey", value: 90, color: "hsl(44, 70%, 50%)" },
      { id: "AMZN", value: 100, color: "hsl(44, 70%, 50%)" },
      { id: "EC2", value: 100, color: "hsl(44, 70%, 50%)" },
    ],
  },
];

function ChannelComponent() {
  return (
    <div style={{ marginTop: "70px" }}>
      <h4>나라별 구글트랜드 지수</h4>
      <div style={{ display: "flex", flexWrap: "wrap", width: "80%" }}>
        {channelsData.map((channel) => (
          <div
            key={channel.channel}
            style={{ marginBottom: "80px", height: "180px", width: "50%" }}
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
