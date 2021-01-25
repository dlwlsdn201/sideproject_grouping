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
    height: 100vw;
`

const StyledOddSectionWrap = Styled.section`
    /* display: inherit; */
    padding : 2em;
    flex: 1;
    width: 100%;
    height: 5px;
    background : ${palette.violet[2]};
`

const StyledEvenSectionWrap = Styled.section`
    display: inherit;
    padding : 2em;
    flex: 1;
    width: 100%;
    /* hegiht: 30vh; */
`


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