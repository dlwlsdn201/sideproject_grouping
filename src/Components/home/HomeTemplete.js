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


const HomeTemplete = () => {
    return (
        <StyledMainContainer>
            <StyledOddSectionWrap>
                <Content/>
                <Content/>
                <Content/>
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