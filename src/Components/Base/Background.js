import React from 'react';
import Styled from 'styled-components';
import backgroundImg from '../../lib/images/background1.jpg';


const BackgroundContainer = Styled.section`
    width : 100%;
    height: 45%;
    color: white;
`

const StyledBackgroundWrap = Styled.div`
    position: relative;
    background: url(${backgroundImg}) no-repeat 100%/100% 100%;
    background-size: 100%;
    width: 100%;
    height: 100%;

`

const StyledSloganWrap = Styled.h1`
    position: absolute;
    width: 100%;
    padding: 10% 18%;
    
    span{
        font-size: 2rem;
    }

    p{
        font-weight: 300;
        font-size: 1.2rem;
        word-break: keep-all;
        margin-top : 2.2rem;
        line-height: 2rem;
    }
`


const Background = () => {
    return (
        <BackgroundContainer>
            {/* <img src={backgroundImg} alt='Grouping'></img> */}
            <StyledBackgroundWrap/>
            <StyledSloganWrap>
                <span>그루핑에 들어온 이 순간, 당신은 이제 혼자가 아닙니다</span>
                <p>여기는 웹 개발자의 꿈을 가지고 있는 예비 개발자들이 함께 성장할 수 있도록 도와줄 커뮤니티 플랫폼입니다. </p>
            </StyledSloganWrap>
        </BackgroundContainer>
    );
};

export default Background;