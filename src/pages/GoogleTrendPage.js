import styled from "styled-components";
import PeriodComponent from "../components/MainPage/PeriodComponent";
import ChannelComponent from "../components/GooglePage/ChannelComponent";
import Top20Component from "../components/GooglePage/Top20Component";

const TotalDiv = styled.div`
  display: flex;
  height: 100%;
`;
const LeftDiv = styled.div`
  width: 80%;
  @media (max-width: 1230px) {
    width: 100%;
  }
`;
const RightDiv = styled.div`
  width: 20%;
  @media (max-width: 1230px) {
    display: none; /* 화면 너비가 1230px 이하일 때 숨김 */
  }
`;

function GoogleTrendPage() {
  return (
    <TotalDiv>
      <LeftDiv>
        <PeriodComponent />
        <ChannelComponent />
      </LeftDiv>
      <RightDiv>
        <Top20Component />
      </RightDiv>
    </TotalDiv>
  );
}

export default GoogleTrendPage;
