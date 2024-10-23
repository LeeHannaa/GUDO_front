import styled from "styled-components";

const PeriodBox = styled.div`
  width: 70%;
  height: 100px;
  border: 1px solid #4c4c4c;
  border-radius: 8px;
  margin-bottom: 20px;
`;
const Input = styled.input`
  width: 40%;
  border: none;
  border-bottom: 1px solid #4c4c4c;
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
  margin-right: 30%;
  float: right;
`;

function PeriodComponent() {
  return (
    <div>
      <h4>데이터 수집 기간</h4>
      <PeriodBox>
        <span>원하는 검색어 입력 : </span>
        <Input placeholder="ex) 헬스,요가,등산 (단어를 ,로 구분하시오)"></Input>
      </PeriodBox>

      <CheckBT>결과 보기</CheckBT>
      {/* <CancleBT>취소</CancleBT> */}
    </div>
  );
}

export default PeriodComponent;
