// ChannelComponent.js
import BarComponent from "./BarComponent";

function DataComponent() {
  return (
    <div style={{ marginTop: "70px", height: "50%" }}>
      <h4>두 기간의 데이터 비교</h4>
      <BarComponent />
    </div>
  );
}

export default DataComponent;
