import React, { useState } from "react";
import styled from "styled-components";

const Keyword = styled.p`
  font-size: 12px;
`;
const MoveBT = styled.button`
  width: 80px;
  height: 30px;
  background-color: #9a8146;
  border: none;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  margin-top: 30px;
`;
const ColumnsBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 380px;
`;

const KeywordComponent = ({ keywords }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 10;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, keywords.length)
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const displayedKeywords = keywords.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <>
      <ColumnsBox>
        {displayedKeywords.map((item) => (
          <Keyword key={item.id}>
            {item.id}. {item.word}
          </Keyword>
        ))}
      </ColumnsBox>
      <>
        {currentIndex > 0 && <MoveBT onClick={handlePrevious}>이전</MoveBT>}
        {currentIndex + itemsPerPage < keywords.length && (
          <MoveBT onClick={handleNext}>다음</MoveBT>
        )}
      </>
    </>
  );
};

export default KeywordComponent;
