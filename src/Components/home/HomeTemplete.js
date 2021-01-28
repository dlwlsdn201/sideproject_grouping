import React from 'react';
import Styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Content from '../common/Content';

const StyledMainContainer = Styled.main`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-contents: center;
    background : white;
    width: 90vw;
    height: auto;
`

const StyledOddSectionWrap = Styled.section`
    display: flex;
    justify-content: space-around;
    padding : 2em;
    flex: 1;
    width: 100%;
    background : ${palette.violet[2]};
`;

const StyledEvenSectionWrap = Styled.section`
    display: inherit;
    padding : 2em;
    flex: 1;
    width: 100%;
`;

const DATA = {
    title : "FrontEnd Study",
    brief : "하반기 네이버 공채 준비하시는 분 같이해요~",
    tag : ["프론트엔드","네이버","카카오"],
    people : [4,5],
<<<<<<< HEAD
    subject : ["html5","css3","js","react"],
=======
    subject : ["html5","css3","react"],
>>>>>>> 755986e2f08264ef4268838ef14c7e9a54bc039b
};

const HomeTemplete = () => {
    return (
        <StyledMainContainer>
            <StyledOddSectionWrap>
                <Content data={DATA}/>
                <Content data={DATA}/>
                <Content data={DATA}/>
            </StyledOddSectionWrap>
            <StyledEvenSectionWrap>
                section2_Co-Project 
            </StyledEvenSectionWrap>
            <StyledOddSectionWrap>
                section3_Q&A
            </StyledOddSectionWrap>
        </StyledMainContainer>
    );
};

export default HomeTemplete;