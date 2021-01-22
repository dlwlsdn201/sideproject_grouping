import React from 'react';
import Styled from 'styled-components';
import {router} from 'react-router-dom';
import palette from '../../lib/styles/palette';


const StyledMainContainer = Styled.main`
    background : white;
    width: 90%;
    height: 90vh;
`

const StyledOddSectionWrap = Styled.section`
    width : 100%;
    background : ${palette.violet[3]};
`

const StyledEvenSectionWrap = Styled.section`
    width : 100%;
`


const Main = () => {
    return (
        <StyledMainContainer>
            <StyledOddSectionWrap>
                section1_Co-Study
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

export default Main;