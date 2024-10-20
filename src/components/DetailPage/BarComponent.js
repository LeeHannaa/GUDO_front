import styled from "styled-components";

const NoCenterHorizontal = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Box = styled.div`
  font-size: 18px;
  width: 90%;
  height: 85%;
  border-radius: 20px;
  box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  background-color: #fcfffe;
  flex-direction: column;
`;
const ChannelText = styled.p`
  width: 100px;
  font-size: 18px;
  margin-left: 30px;
`;
const Graph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  width: 80%;
`;
const GraphText = styled.p`
  width: 20%;
  font-size: 14px;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20%;
`;
const BarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  width: 100%;
`;

const Bar = styled.div`
  height: 8px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.width}%;
`;

const barData = [
  {
    channel: "instagram",
    first: 80,
    second: 40,
  },
  {
    channel: "tictok",
    first: 100,
    second: 30,
  },
  {
    channel: "amazon",
    first: 180,
    second: 90,
  },
  {
    channel: "wallmart",
    first: 120,
    second: 60,
  },
];

function BarComponent() {
  return (
    <>
      <Box>
        {barData?.map((item) => {
          const targetPercentage = item.first;
          const consumptionPercentage = item.second;
          return (
            <div
              style={{ width: "100%", display: "flex", marginBottom: "1.5%" }}
            >
              <ChannelText>{item.channel}</ChannelText>
              <Graph>
                <NoCenterHorizontal>
                  <BarContainer>
                    <Bar bgColor={"#E8BF60"} width={targetPercentage} />
                  </BarContainer>
                  <GraphText>{targetPercentage}</GraphText>
                </NoCenterHorizontal>
                <NoCenterHorizontal>
                  <BarContainer>
                    <Bar bgColor={"#AE914B"} width={consumptionPercentage} />
                  </BarContainer>
                  <GraphText>{consumptionPercentage}</GraphText>
                </NoCenterHorizontal>
              </Graph>
            </div>
          );
        })}
      </Box>
    </>
  );
}

export default BarComponent;
