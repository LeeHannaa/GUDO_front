// PieComponent.js
import { ResponsivePie } from "@nivo/pie";

const PieComponent = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
  />
);

export default PieComponent;
