// ChannelComponent.js
import PieComponent from "./PieComponent";

const channelsData = [
  {
    channel: "instagram",
    data: [
      { id: "infinite", value: 50, color: "hsl(357, 70%, 50%)" },
      { id: "exo", value: 70, color: "hsl(357, 70%, 50%)" },
      { id: "nike", value: 30, color: "hsl(357, 70%, 50%)" },
      { id: "kakao", value: 40, color: "hsl(357, 70%, 50%)" },
    ],
  },
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
  return (
    <div style={{ marginTop: "70px" }}>
      <h4>채널별 수집 현황</h4>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
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
