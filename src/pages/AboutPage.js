import React from 'react';
import Template from "../components/base/Template";
import Main from '../components/base/Main';
import Styled from 'styled-components';
import Intro from '../components/about/Intro';
import palette from '../lib/styles/palette';

const StyledEvenSectionWrap = Styled.section`
    display: block;
    padding : 2em;
    flex: 1;
    width: 90vw;
    background : ${palette.skyblue[1]};
`;


const AboutPage = () => {
    return (
        <Template>
            <Main>
                <StyledEvenSectionWrap>
                    <Intro/>
                </StyledEvenSectionWrap>
            </Main>
        </Template>
    );
};

export default AboutPage;