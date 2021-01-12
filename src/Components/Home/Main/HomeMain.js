import React, { Component } from "react";
import styled from "styled-components";
import NewCoStudy from "./New-CoStudy/NewCoStudy";
import NewCoProject from "./New-CoProject/NewCoProject";
import NewQnA from "./New-QnA/NewQnA";

const MainBody = () => {
  return (
    <BodyWrap>
          <TitleBox>New Co-Study</TitleBox>
            <NewCoStudy/>
          <TitleBox>New Co-Project</TitleBox>
            <NewCoProject/>
          <TitleBox>New Q&A</TitleBox>
            <NewQnA/>
      </BodyWrap>
  );
};

const BodyWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed red;
  width: 90vw;
  padding: 1em;
`;



const TitleBox = styled.h3`
  justify-self: flex-start;
  border: 1px dashed red;
  width: 10em;
  text-align: center;
`;




export default MainBody;
