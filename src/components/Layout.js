import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const TotalDiv = styled.div`
  display: flex;
  height: 100%;
`;
const LeftDiv = styled.div`
  background: #4b4b4b;
  width: 13%;
  padding-left: 2%;
`;
const RightDiv = styled.div`
  width: 85%;
  margin-left: 100px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover,
  &:active {
    color: inherit;
    font-weight: bold;
    color: #d1ac58;
  }
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #d1ac58;
  margin-bottom: 100px;
`;
const Menu = styled.p`
  font-size: 28px;
  color: ${(props) => (props.clicked ? "#d1ac58" : "#A27F2E")};
  font-weight: ${(props) => (props.clicked ? "bold" : "normal")};
`;

export default function Layout() {
  const [clickedLink, setClickedLink] = useState("");

  const handleLinkClick = (link) => {
    setClickedLink(link);
  };
  return (
    <TotalDiv>
      <LeftDiv>
        <Title>GUDO</Title>
        <Menu
          clicked={clickedLink === "main"}
          onClick={() => handleLinkClick("main")}
        >
          <StyledLink to="/">대시보드</StyledLink>
        </Menu>
        <Menu
          clicked={clickedLink === "detail"}
          onClick={() => handleLinkClick("detail")}
        >
          <StyledLink to="/detail">상세보기</StyledLink>
        </Menu>
      </LeftDiv>
      <RightDiv>
        <Outlet />
      </RightDiv>
    </TotalDiv>
  );
}
