import styled from "styled-components";

const PeriodBox = styled.div`
  width: 90%;
  height: 100px;
  border: 1px solid #4c4c4c;
  border-radius: 8px;
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
const CheckBT = styled.button`
  width: 10%;
  height: 40px;
  background: #d1ac58;
  border: none;
  border-radius: 20px;
  margin-right: 60px;
  float: right;
`;

function PeriodComponent() {
  return (
    <div>
      <h4>데이터 수집 기간</h4>
      <PeriodBox></PeriodBox>

      <CheckBT>확인</CheckBT>
      <CancleBT>취소</CancleBT>
    </div>
  );
}

export default PeriodComponent;
