import React, { Component } from "react";
import styled from "styled-components";
import NewCoStudy from "./New-CoStudy/NewCoStudy";
import NewCoProject from "./New-CoProject/NewCoProject";
import NewQnA from "./New-QnA/NewQnA";

//--------styled-Components Codes-----------
const BodyWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed red;
  width: 90vw;
  padding: 1em;
  height: 100%;
`;

const SectionWrap = styled.div`
  width: 70%;
  height: 150%;
  display : flex;
  /* flex-direction : column;
  align-items : center; */
  border : 2px solid brown;
  margin : 2% auto;
`;

const TitleBox = styled.h3`
  align-self: flex-start;
  border: 1px dashed red;
  width: 10em;
  text-align: center;
`;
// -----------------------------------------


const MainBody = () => {
  return (
    <BodyWrap>
      <SectionWrap>
        <TitleBox>New Co-Study</TitleBox>
        <NewCoStudy/>
      </SectionWrap>
      <SectionWrap>
        <TitleBox>New Co-Project</TitleBox>  
        <NewCoProject/>
      </SectionWrap>
      <SectionWrap>
        <TitleBox>New Q&A</TitleBox>
        <NewQnA/>
      </SectionWrap>
    </BodyWrap>
  );
};

export default MainBody;
